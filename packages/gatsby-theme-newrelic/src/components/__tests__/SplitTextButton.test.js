import React from 'react';
import { SplitFactory } from '@splitsoftware/splitio-react';
import SplitTextButton from '../SplitTextButton';
import {  renderWithProviders} from '../../test-utils/renderHelpers';
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

  expect(screen.queryByText('Start now')).not.toBeInTheDocument();
  expect(await screen.findByText('Free account')).toBeInTheDocument();
});

const createSplitConfig = (text) => {
  let treatment = {};
  if (text) {
    treatment = (text === 'start_now')
      ? { treatment: 'start_now', config: '{ "text": "Start now" }' }
      : { treatment: 'free_account', config: '{ "text": "Free account" }' };
  }

  return {
    core: {
      authorizationKey: 'localhost',
      key: 'user',
    },
    features: {
      deven_signupbutton_text: treatment
    },
    scheduler: {
      offlineRefreshRate: 15,
    },
    debug: false,
  };
};
