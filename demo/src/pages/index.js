import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { css } from '@emotion/core';
import {
  Button,
  Icon,
  GlobalHeader,
  NewRelicLogo,
  Surface,
} from '@newrelic/gatsby-theme-newrelic';

const IndexPage = ({ data }) => (
  <>
    <GlobalHeader editUrl="https://github.com/newrelic/gatsby-theme-newrelic/tree/develop/demo/src/pages/index.js" />
    <div
      css={css`
        margin: 0 auto;
        padding: ${data.site.layout.contentPadding};
        max-width: ${data.site.layout.maxWidth};
      `}
    >
      <NewRelicLogo />
      <div>
        Check it out on <Icon name={Icon.TYPE.GITHUB} />
      </div>
      <h1>Hello, World</h1>
      <p>This is a test</p>
      <Button
        onClick={() => console.log('IT IS NOT')}
        variant={Button.VARIANT.PRIMARY}
        size={Button.SIZE.LARGE}
      >
        Or is it?
      </Button>

      <section>
        <h2>Primary surfaces</h2>
        <div
          css={css`
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
            grid-gap: 2rem;
          `}
        >
          <Surface
            css={css`
              padding: 2rem;
            `}
            type={Surface.TYPE.PRIMARY}
          >
            Non-interactive
          </Surface>
          <Surface
            interactive
            css={css`
              padding: 2rem;
            `}
            type={Surface.TYPE.PRIMARY}
          >
            Interactive
          </Surface>
        </div>
        <h2>Secondary surfaces</h2>
        <div
          css={css`
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
            grid-gap: 2rem;
            padding: 1rem;
            border-radius: 4px;
            background: var(--secondary-background-color);
          `}
        >
          <Surface
            css={css`
              padding: 2rem;
            `}
            type={Surface.TYPE.SECONDARY}
          >
            Non-interactive
          </Surface>
          <Surface
            interactive
            css={css`
              padding: 2rem;
            `}
            type={Surface.TYPE.SECONDARY}
          >
            Interactive
          </Surface>
        </div>
      </section>
    </div>
  </>
);

IndexPage.propTypes = {
  data: PropTypes.object,
};

export const pageQuery = graphql`
  query {
    site {
      layout {
        contentPadding
        maxWidth
      }
    }
  }
`;

export default IndexPage;
