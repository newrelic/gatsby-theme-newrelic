/* eslint-disable no-console,no-alert */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { css } from '@emotion/core';
import {
  Button,
  CodeBlock,
  GlobalHeader,
  SearchInput,
  SwiftSearch,
  Surface,
  HamburgerMenu,
  Video,
  Overlay,
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
  const [searchTerm, setSearchTerm] = useState('');
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  return (
    <>
      {isOverlayOpen && <Overlay onClick={() => setIsOverlayOpen(false)} />}
      <GlobalHeader
        editUrl={`${siteMetadata.repository}/tree/develop/demo/src/pages/index.js`}
        search
        onClickSearch={() => setIsOverlayOpen(true)}
      />
      <header
        css={css`
          position: relative;
          border-bottom: 1px solid var(--divider-color);
          padding: 0 2rem;
          width: 100vw;
        `}
      >
        <div
          css={css`
            display: flex;
            justify-content: flex-end;
          `}
        >
          <HamburgerMenu
            isOpen={isHamburgerOpen}
            onToggle={() => setIsHamburgerOpen(!isHamburgerOpen)}
          />
        </div>
      </header>
      <div
        css={css`
          margin: 0 auto;
          padding: ${layout.contentPadding};
          max-width: ${layout.maxWidth};

          section {
            margin-bottom: 4rem;
          }

          h2 {
            margin-bottom: 1rem;

            &:not(:first-child) {
              margin-top: 1rem;
            }
          }
        `}
      >
        <h1>Hello, demo</h1>
        <p>
          This is a demo site that can be used to preview features of the New
          Relic Gatsby theme. Feel free to add examples to this site to showcase
          features.
        </p>
        <section>
          <h2>Search inputs</h2>
          <SearchInput
            style={{ margin: '1rem 0' }}
            placeholder="Test out a medium search"
            onClear={() => setSearchTerm('')}
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
            width="500px"
          />
          <SearchInput
            style={{ marginBottom: '1rem' }}
            placeholder="Test out a large search"
            onClear={() => setSearchTerm('')}
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
            width="500px"
            size={SearchInput.SIZE.LARGE}
          />
          <SwiftSearch />
        </section>
        <section>
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
            live
            preview
            fileName="src/components/Button.js"
            language="jsx"
            scope={{ Button }}
            css={css`
              margin-bottom: 2rem;
            `}
          >
            {liveCodeSample}
          </CodeBlock>
        </section>
        <section>
          <h2>A button</h2>
          <Button
            onClick={() => alert('Hello!')}
            variant={Button.VARIANT.PRIMARY}
            size={Button.SIZE.LARGE}
          >
            Click me
          </Button>
        </section>
        <section>
          <h2>Primary surfaces</h2>
          <div
            css={css`
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
              grid-gap: 2rem;
              margin-bottom: 2rem;
            `}
          >
            <Surface
              base={Surface.BASE.PRIMARY}
              css={css`
                padding: 2rem;
              `}
            >
              Non-interactive
            </Surface>
            <Surface
              interactive
              base={Surface.BASE.PRIMARY}
              css={css`
                padding: 2rem;
              `}
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
              base={Surface.BASE.SECONDARY}
              css={css`
                padding: 2rem;
              `}
            >
              Non-interactive
            </Surface>
            <Surface
              interactive
              base={Surface.BASE.SECONDARY}
              css={css`
                padding: 2rem;
              `}
            >
              Interactive
            </Surface>
          </div>
        </section>
        <section>
          <h2>Wistia video</h2>
          <Video id="inyshp3m7r" type={Video.TYPE.WISTIA} width="500px" />
          <h2>YouTube video</h2>
          <Video id="ZagZfNQYJEU" type={Video.TYPE.YOUTUBE} width="500px" />
        </section>
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
