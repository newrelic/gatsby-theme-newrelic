import React from 'react';
import TestRenderer from 'react-test-renderer';
import rerender from '@testing-library/react';
import { SplitFactory } from '@splitsoftware/splitio-react';
import SplitTextButton from '../SplitTextButton';
import { renderWithProviders } from '../../test-utils/renderHelpers';
import { screen } from '@testing-library/react';

import useThemeTranslation from '../../hooks/useThemeTranslation';
import Button from '../Button';

// jest.mock('../../hooks/useThemeTranslation', () =>
//   jest.fn(() => ({ t: jest.fn((s) => s) }))
// );

// jest.mock('../Button', () => ({ children }) => <button>{children}</button>);

// jest.mock('gatsby', () => ({
//   __esModule: true,
//   graphql: () => {},
//   Link: ({ to, ...props }) => <a href={to} {...props} />,
//   useStaticQuery: () => ({
//     allLocale: {
//       nodes: [
//         {
//           name: 'English',
//           locale: 'en',
//           localizedPath: '/en',
//           isDefault: true,
//         },
//       ],
//     },
//     site: {
//       siteMetadata: {
//         siteUrl: 'https://github.com/foo/bar',
//         repository: 'https://foobar.net',
//       },
//     },
//     newRelicThemeConfig: {
//       tessen: {
//         product: 'foo',
//         subproduct: 'foobar',
//       },
//     },
//   }),
// }));

export const renderWithTranslation = (component, options) => {
  i18n.init({
    ...i18nextOptions,
    lng: 'en',
    resources: {
      en: {
        [themeNamespace]: translations,
      },
    },
  });

  return render(
    <I18nextProvider i18n={i18n}>
      <LocaleProvider i18n={i18n}>{component}</LocaleProvider>
    </I18nextProvider>,
    options
  );
};

test('renders default button text with no split', async () => {
  const config = createSplitConfig('start_now');
  //   console.log(config);

  const element = renderWithProviders(
    <SplitFactory config={config} updateOnSdkTimedout={true}>
      <SplitTextButton />
    </SplitFactory>
  );

  await TestRenderer.act(async () => {
    rerender(element);
  });

  expect(screen.getByText('Free account')).toBeTruthy();
});

const createSplitConfig = (text) => {
  return {
    core: {
      authorizationKey: 'localhost',
      key: 'user',
    },
    features: {
      deven_signupbutton_text:
        text === 'start_now'
          ? { treatment: 'start_now', config: '{ "text": "Start now" }' }
          : { treatment: 'free_account', config: '{ "text": "Free account" }' },
    },
    scheduler: {
      offlineRefreshRate: 15,
    },
    debug: false,
  };
};
