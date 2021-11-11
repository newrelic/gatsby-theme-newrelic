import React from 'react';
import { SplitFactory } from '@splitsoftware/splitio-react';
import SplitTextButton from '../SplitTextButton';
import { renderWithProviders } from '../../test-utils/renderHelpers';
import { screen } from '@testing-library/react';

jest.mock('gatsby', () => ({
  __esModule: true,
  graphql: () => {},
  Link: ({ to, ...props }) => <a href={to} {...props} />,
  useStaticQuery: () => ({
    allLocale: {
      nodes: [
        {
          name: 'English',
          locale: 'en',
          localizedPath: '/en',
          isDefault: true,
        },
      ],
    },
    site: {
      siteMetadata: {
        siteUrl: 'https://github.com/foo/bar',
        repository: 'https://foobar.net',
      },
    },
    newRelicThemeConfig: {
      tessen: {
        product: 'foo',
        subproduct: 'foobar',
      },
    },
  }),
}));

test('renders default button text with no split', async () => {
  const config = createSplitConfig();

  renderWithProviders(
    <SplitFactory config={config} updateOnSdkTimedout={true}>
      <SplitTextButton />
    </SplitFactory>
  );

  expect(await screen.findByText('Free account')).toBeInTheDocument();
  expect(screen.queryByText('Start now')).not.toBeInTheDocument();
});

test('renders start_now treatment', async () => {
  const config = createSplitConfig('start_now');

  renderWithProviders(
    <SplitFactory config={config} updateOnSdkTimedout={true}>
      <SplitTextButton />
    </SplitFactory>
  );

  expect(await screen.findByText('Start now')).toBeInTheDocument();
  expect(screen.queryByText('Free account')).not.toBeInTheDocument();
});

test('renders free account treatment', async () => {
  const config = createSplitConfig('free_account');

  renderWithProviders(
    <SplitFactory config={config} updateOnSdkTimedout={true}>
      <SplitTextButton />
    </SplitFactory>
  );

  expect(await screen.findByText('Free account')).toBeInTheDocument();
  expect(screen.queryByText('Start now')).not.toBeInTheDocument();
});

test('renders if no features are returned from Split.io', async () => {
  const config = {
    core: {
      authorizationKey: 'localhost',
      key: 'user',
    },
    features: {},
    scheduler: {
      offlineRefreshRate: 15,
    },
    debug: false,
  };
  renderWithProviders(
    <SplitFactory config={config} updateOnSdkTimedout={true}>
      <SplitTextButton />
    </SplitFactory>
  );

  expect(await screen.findByText('Free account')).toBeInTheDocument();
  expect(screen.queryByText('Start now')).not.toBeInTheDocument();
});

const createSplitConfig = (text) => {
  let treatment = {};
  if (text) {
    treatment =
      text === 'start_now'
        ? { treatment: 'start_now', config: '{ "text": "Start now" }' }
        : { treatment: 'free_account', config: '{ "text": "Free account" }' };
  }

  return {
    core: {
      authorizationKey: 'localhost',
      key: 'user',
    },
    features: {
      deven_signupbutton_text: treatment,
    },
    scheduler: {
      offlineRefreshRate: 15,
    },
    debug: false,
  };
};
