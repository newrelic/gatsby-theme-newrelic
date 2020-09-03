/* eslint-disable no-alert */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { css } from '@emotion/core';
import {
  Banner,
  Button,
  CodeBlock,
  Feedback,
  GlobalHeader,
  HamburgerMenu,
  NewRelicLogo,
  SearchInput,
  Surface,
  Tag,
  TagList,
  Video,
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Banner color=" --accent-text-color">
        <p>This is a marketing banner!</p>
      </Banner>
      <GlobalHeader
        editUrl={`${siteMetadata.repository}/tree/develop/demo/src/pages/index.js`}
        search
      />
      <header
        css={css`
          display: none;
          padding: 1rem ${layout.contentPadding};
          justify-content: space-between;
          align-items: center;

          @media screen and (max-width: 400px) {
            display: flex;
          }
        `}
      >
        <NewRelicLogo />
        <HamburgerMenu
          onToggle={() => setIsMenuOpen((isOpen) => !isOpen)}
          isOpen={isMenuOpen}
        />
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
            style={{ margin: '1rem 0', maxWidth: '500px' }}
            placeholder="Test out a medium search"
            onClear={() => setSearchTerm('')}
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          />
          <SearchInput
            style={{ marginBottom: '1rem', maxWidth: '500px' }}
            placeholder="Test out a large search"
            onClear={() => setSearchTerm('')}
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
            size={SearchInput.SIZE.LARGE}
          />
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
          <h2>Buttons</h2>
          <h3>Variants</h3>
          <div
            css={css`
              display: flex;
              gap: 1rem;
              margin-bottom: 2rem;
            `}
          >
            <Button
              onClick={() => alert('Hello!')}
              variant={Button.VARIANT.PRIMARY}
            >
              Primary
            </Button>
            <Button
              onClick={() => alert('Hello!')}
              variant={Button.VARIANT.NORMAL}
            >
              Normal
            </Button>
            <Button
              onClick={() => alert('Hello!')}
              variant={Button.VARIANT.OUTLINE}
            >
              Outline
            </Button>
            <Button
              onClick={() => alert('Hello!')}
              variant={Button.VARIANT.LINK}
            >
              Link
            </Button>
          </div>
          <h3>Sizes</h3>
          <div
            css={css`
              display: flex;
              align-items: flex-start;
              gap: 1rem;
            `}
          >
            <Button
              onClick={() => alert('Hello!')}
              variant={Button.VARIANT.PRIMARY}
            >
              Default
            </Button>
            <Button
              onClick={() => alert('Hello!')}
              variant={Button.VARIANT.PRIMARY}
              size={Button.SIZE.SMALL}
            >
              Small
            </Button>
            <Button
              onClick={() => alert('Hello!')}
              variant={Button.VARIANT.PRIMARY}
              size={Button.SIZE.EXTRA_SMALL}
            >
              Extra small
            </Button>
          </div>
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

        <section>
          <h2>Feedback</h2>
          <div
            css={css`
              max-width: 350px;
            `}
          >
            <Feedback
              onSubmit={({ sentiment, comment }) => {
                console.log('comment', sentiment, comment);
              }}
            />
          </div>
        </section>

        <section>
          <TagList>
            <Tag>React</Tag>
            <Tag interactive>Agent</Tag>
          </TagList>
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
