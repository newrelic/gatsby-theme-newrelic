import { useStaticQuery } from 'gatsby';
import { merge } from 'lodash-es';
import HamburgerMenu from '../HamburgerMenu.mjs';
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

test(`renders mobile nav menu when 'toggle' state is true`, () => {
  const { container } = renderWithProviders(
    <HamburgerMenu onToggle={jest.fn(() => true)} isOpen={true} />
  );

  expect(
    container
      .querySelector('[aria-label="Mobile Menu"]')
      .getAttribute('aria-expanded')
  ).toBe('true');
});

test(`does not render mobile nav menu when 'toggle' state is false`, () => {
  const { container } = renderWithProviders(
    <HamburgerMenu onToggle={jest.fn(() => false)} isOpen={false} />
  );

  expect(
    container
      .querySelector('[aria-label="Mobile Menu"]')
      .getAttribute('aria-expanded')
  ).toBe('false');
});
