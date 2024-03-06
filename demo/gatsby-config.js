require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  trailingSlash: 'always',
  flags: {
    DEV_SSR: true,
  },
  siteMetadata: {
    repository: 'https://github.com/newrelic/gatsby-theme-newrelic',
    siteUrl: 'https://developer.newrelic.com',
    titleTemplate: '%s | Gatsby Theme Demo Site',
    branch: 'develop',
  },
  plugins: [
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-netlify',
    {
      resolve: '@newrelic/gatsby-theme-newrelic',
      options: {
        sitemap: process.env.ENVIRONMENT === 'production',
        robots: {
          resolveEnv: () => process.env.ENVIRONMENT || 'development',
          env: {
            staging: {
              host: 'https://docs-dev.newrelic.com',
              policy: [{ userAgent: '*', disallow: ['/'] }],
            },
            development: {
              policy: [{ userAgent: '*', disallow: ['/'] }],
            },
            production: {
              policy: [{ userAgent: '*', allow: '/' }],
            },
          },
        },
        i18n: {
          translationsPath: `${__dirname}/src/i18n/translations`,
          additionalLocales: ['jp', 'kr', 'pt', 'es'],
        },
        layout: {
          component: require.resolve('./src/layouts'),
          contentPadding: '1.5rem',
          maxWidth: '1600px',
          sidebarWidth: '340px',
          mobileBreakpoint: '760px',
        },
        // New Relic Gatsby Theme - Demo Site
        newrelic: {
          config: {
            instrumentationType: 'proAndSPA',
            accountId: '10956800',
            trustKey: '1',
            agentID: '35094665',
            licenseKey: 'NRJS-649173eb1a7b28cd6ab',
            applicationID: '35094665',
            beacon: 'staging-bam.nr-data.net',
            errorBeacon: 'staging-bam.nr-data.net',
            settings: {
              session_replay: {
                enabled: true,
                block_selector: '',
                mask_text_selector: '*',
                sampling_rate: 100.0,
                error_sampling_rate: 100.0,
                mask_all_inputs: true,
                collect_fonts: true,
                inline_images: false,
                inline_stylesheet: true,
                mask_input_options: {},
              },
              distributed_tracing: { enabled: true },
              privacy: { cookies_enabled: true },
              ajax: { deny_list: ['staging-bam-cell.nr-data.net'] },
            },
          },
        },

        segment: {
          segmentWriteKey: 'n9T9St8geATEFC1tmc0XH7XzEsOSVZCK',
          section: 'theme_demo',
          platform: 'docs_pages',
        },
        splitio: {
          // Mocked features only used when in localhost mode
          // https://help.split.io/hc/en-us/articles/360020448791-JavaScript-SDK#localhost-mode
          features: {
            deven_signupbutton_text: {
              treatment: 'start_now',
              config: '{ "text": "Start now" }',
            },
          },
          core: {
            authorizationKey: process.env.SPLITIO_AUTH_KEY || 'localhost',
          },
          debug: false,
        },
        signup: {
          environment: process.env.ENVIRONMENT || 'staging',
          signupUrl:
            process.env.SIGNUP_URL ||
            'https://signup-receiver.staging-service.newrelic.com',
          reCaptchaToken:
            process.env.RECAPTCHA_TOKEN ||
            '6LdMFd8UAAAAAApWFzm8YCyuGCUfg57U1WvqVYqC',
        },
        feedback: {
          environment: process.env.ENVIRONMENT || 'staging',
          reCaptchaToken:
            process.env.FEEDBACK_RECAPTCHA_TOKEN ||
            '6Lfn8wUiAAAAANBY-ZtKg4V9b4rdGZtJuAng62jo',
        },
        shouldUpdateScroll: {
          routes: ['/'],
        },
        newRelicRequestingServicesHeader: 'gatsby-theme-newrelic-demo',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1200,
              linkImagesToOriginal: false,
              wrapperStyle: 'margin-bottom: var(--paragraph-spacing);',
            },
          },
          {
            resolve: 'gatsby-remark-autolink-headers',
            options: {
              className: 'header-anchor',
              icon: '<svg xmlns="http://www.w3.org/2000/svg" focusable="false" width="1rem" height="1rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path><line x1="8" y1="12" x2="16" y2="12"></line></svg>',
            },
          },
        ],
      },
    },
  ],
};
