const path = require('path');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const { data, errors } = await graphql(`
    query {
      allLocale {
        nodes {
          locale
          isDefault
        }
      }
      allMdx(filter: { fileAbsolutePath: { regex: "/src/content/" } }) {
        nodes {
          slug
          fields {
            fileRelativePath
          }
        }
      }
    }
  `);

  if (errors) {
    reporter.panicOnBuild('Error when running GraphQL query');
    return;
  }

  const { allMdx, allLocale } = data;

  const additionalLocales = allLocale.nodes.filter(
    ({ isDefault }) => !isDefault
  );

  allMdx.nodes.forEach((node) => {
    const {
      slug,
      fields: { fileRelativePath },
    } = node;

    createPage({
      path: slug,
      component: path.resolve('src/templates/basic.js'),
      context: {
        slug,
        fileRelativePath,
      },
    });

    additionalLocales.forEach(({ locale }) => {
      createPage({
        path: path.join(`/${locale}`, slug),
        component: path.resolve('src/templates/basic.js'),
        context: {
          slug,
          fileRelativePath,
        },
      });
    });
  });
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      fallback: {
        http: false,
        https: false,
        zlib: false,
      },
    },
  });
};

// TEMPORARY dev-only proxy for local SearchGPT testing.
// The SearchGPT service whitelists docs.newrelic.com for CORS but NOT localhost
// (preflight from localhost 307-redirects to SSO login), so direct browser
// calls from the dev server are blocked. This forwards /v2/* to the service
// from the Node side (no CORS) and injects the api-key server-side — which also
// mirrors the production proxy pattern. Remove with the rest of the test setup.
exports.onCreateDevServer = ({ app }) => {
  app.use('/v2', async (req, res) => {
    const apiKey = process.env.GATSBY_SEARCHGPT_API_KEY;
    const target = `https://support-search.service.newrelic.com/v2${req.url}`;

    try {
      const upstream = await fetch(target, { headers: { 'api-key': apiKey } });
      const body = await upstream.text();

      res
        .status(upstream.status)
        .set(
          'content-type',
          upstream.headers.get('content-type') || 'application/json'
        )
        .send(body);
    } catch (err) {
      res.status(502).json({ error: { message: String(err) } });
    }
  });
};
