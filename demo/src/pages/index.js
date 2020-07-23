import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { css } from '@emotion/core';
import {
  Button,
  CodeBlock,
  Icon,
  GlobalHeader,
  NewRelicLogo,
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
      <h2>A button</h2>
      <CodeBlock
        copyable
        lineNumbers
        highlightedLines="5-7,11"
        fileName="src/components/Button.js"
        language="jsx"
      >
        {codeSample}
      </CodeBlock>
      <h2>A live editable button w/ preview</h2>
      <CodeBlock
        copyable
        lineNumbers
        preview
        live
        fileName="src/components/Button.js"
        language="jsx"
        scope={{ Button }}
      >
        {liveCodeSample}
      </CodeBlock>
      <Button
        onClick={() => console.log('IT IS NOT')}
        variant={Button.VARIANT.PRIMARY}
        size={Button.SIZE.LARGE}
      >
        Or is it?
      </Button>
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
