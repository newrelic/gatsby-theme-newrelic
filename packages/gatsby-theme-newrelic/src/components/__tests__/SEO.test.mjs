import { useStaticQuery } from 'gatsby';
import { renderWithProviders } from '../../test-utils/renderHelpers.mjs';

import { Helmet } from 'react-helmet';
import SEO from '../SEO.mjs';

describe('SEO component', () => {
  beforeAll(() => {
    useStaticQuery.mockReturnValue({
      site: {
        siteMetadata: {
          title: `Test Title`,
          description: `Test Description`,
          siteUrl: 'https://docs.newrelic.com',
        },
      },
      allLocale: {
        nodes: [
          {
            locale: 'en',
            hrefLang: 'en',
            isDefault: true,
          },
        ],
      },
      newRelicThemeConfig: {
        signup: {
          reCaptchaToken: 'test-12345',
        },
        feedback: {
          reCaptchaToken: 'test-67890',
        },
      },
    });
  });

  it('Should show correct title', () => {
    renderWithProviders(
      <SEO location={{ pathname: '/test' }} title="Test Title" />
    );

    const helmet = Helmet.peek();
    console.log('helmet', helmet);
    expect(helmet.title).toBe('Test Title');
  });
});
