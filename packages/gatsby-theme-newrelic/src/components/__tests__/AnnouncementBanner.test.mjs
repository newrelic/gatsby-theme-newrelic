import { useStaticQuery } from 'gatsby';
import { merge } from 'lodash-es';
import { screen, waitForElementToBeRemoved } from '@testing-library/dom';
import { userEvent } from '@testing-library/user-event';
import AnnouncementBanner from '../AnnouncementBanner.mjs';
import { renderWithProviders } from '../../test-utils/renderHelpers.mjs';

const DEFAULT_DATA = {
  newRelicThemeConfig: {
    tessen: {
      product: 'foo',
      subproduct: 'bar',
    },
  },
  allLocale: {
    nodes: [{ locale: 'en', isDefault: true }],
  },
  site: {
    siteMetadata: {
      siteUrl: 'https://example.com',
    },
  },
};

const useStaticData = (overrides) =>
  useStaticQuery.mockImplementation(() => merge({}, DEFAULT_DATA, overrides));

useStaticData();

beforeAll(() => {
  jest.useFakeTimers('');
  jest.setSystemTime(new Date('2023-10-31'));
});

afterAll(() => {
  jest.useRealTimers();
});

test('renders banner when current date is between startDate and endDate', () => {
  useStaticData({
    allMdx: {
      nodes: [
        {
          fields: {
            slug: 'src/announcements/nerd-days',
          },
          body: '\n# Test announcement 🤓\n',
          frontmatter: {
            startDate: '2020-09-01',
            endDate: '2023-12-31',
          },
        },
      ],
    },
  });

  renderWithProviders(<AnnouncementBanner />);

  expect(screen.getByTestId('announcement-banner')).toBeVisible();
});

test('does not render banner when current date is outside startDate and endDate', () => {
  useStaticData({
    allMdx: {
      nodes: [
        {
          fields: {
            slug: 'src/announcements/nerd-days',
          },
          body: '\n# Test announcement 🤓\n',
          frontmatter: {
            startDate: '2020-09-01',
            endDate: '2022-12-31',
          },
        },
      ],
    },
  });

  renderWithProviders(<AnnouncementBanner />);

  expect(screen.queryByTestId('announcement-banner')).not.toBeInTheDocument();
});

test('banner is removed when user has dismissed it', async () => {
  useStaticData({
    allMdx: {
      nodes: [
        {
          fields: {
            slug: 'src/announcements/nerd-days',
          },
          body: '\n# Test announcement 🤓\n',
          frontmatter: {
            startDate: '2020-09-01',
            endDate: '2023-12-31',
          },
        },
      ],
    },
  });

  renderWithProviders(<AnnouncementBanner />);

  const closeButton = screen.queryByText('Close');
  userEvent.click(closeButton);
  await waitForElementToBeRemoved(() => screen.queryByText('Close'));

  expect(screen.queryByTestId('announcement-banner')).not.toBeInTheDocument();
});
