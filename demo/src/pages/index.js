/* eslint-disable no-console,no-alert */
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { css } from '@emotion/core';
import {
  Button,
  CodeBlock,
  GlobalHeader,
} from '@newrelic/gatsby-theme-newrelic';

const codeSample = `
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, ...props }) => (
  <button type="button" className="button" {...props}>{children}</button>
);

Button.propTypes = {
  children: PropTypes.node
};

export default Button;
`;

const liveCodeSample = `
<Button variant={Button.VARIANT.PRIMARY} onClick={() => alert('Hello!')}>Hello!</Button>
`;

const IndexPage = ({ data }) => {
  const { layout, siteMetadata } = data.site;

  return (
    <>
      <GlobalHeader
        editUrl={`${siteMetadata.repository}/tree/develop/demo/src/pages/index.js`}
      />
      <div
        css={css`
          margin: 0 auto;
          padding: ${layout.contentPadding};
          max-width: ${layout.maxWidth};
        `}
      >
        <h1>Hello, demo</h1>
        <p>
          This is a demo site that can be used to preview features of the New
          Relic Gatsby theme. Feel free to add examples to this site to showcase
          features.
        </p>
        <h2>A code block</h2>
        <CodeBlock
          copyable
          lineNumbers
          highlightedLines="5-7,11"
          fileName="src/components/Button.js"
          language="jsx"
          css={css`
            margin-bottom: 2rem;
          `}
        >
          {codeSample}
        </CodeBlock>
        <h2>A live editable code block w/ preview</h2>
        <CodeBlock
          copyable
          lineNumbers
          preview
          live
          fileName="src/components/Button.js"
          language="jsx"
          scope={{ Button }}
          css={css`
            margin-bottom: 2rem;
          `}
        >
          {liveCodeSample}
        </CodeBlock>
        <h2>A button</h2>
        <Button
          onClick={() => alert('Hello!')}
          variant={Button.VARIANT.PRIMARY}
          size={Button.SIZE.LARGE}
        >
          Click me
        </Button>
      </div>
    </>
  );
};

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
      siteMetadata {
        repository
      }
    }
  }
`;

export default IndexPage;
