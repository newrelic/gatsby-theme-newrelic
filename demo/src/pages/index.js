/* eslint-disable no-alert */
import React, { useState } from 'react';
import { css } from '@emotion/core';
import {
  Button,
  CodeBlock,
  Callout,
  ContributingGuidelines,
  Feedback,
  Layout,
  PageTools,
  SearchInput,
  SimpleFeedback,
  Surface,
  Tag,
  TagList,
  Terminal,
  Video,
  useLayout,
  useTranslation,
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

const IndexPage = () => {
  const { t } = useTranslation();
  const { contentPadding } = useLayout();
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Layout.Main
      css={css`
        display: grid;
        grid-template-columns: minmax(0, 1fr) 320px;
        grid-template-areas: 'content page-tools';
        grid-gap: ${contentPadding};

        @media screen and (max-width: 1280px) {
          grid-template-columns: minmax(0, 1fr);
          grid-template-areas: content;
        }
      `}
    >
      <Layout.Content
        css={css`
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
        <h1>{t('home.welcome', 'Hello, demo')}</h1>
        <p>
          {t(
            'home.intro',
            'This is a demo site that can be used to preview features of the New Relic Gatsby theme. Feel free to add examples to this site to showcase features.'
          )}
        </p>
        <section>
          <h2>Search inputs</h2>
          <SearchInput
            style={{ margin: '1rem 0', maxWidth: '500px' }}
            placeholder="Test out a medium search"
            onClear={() => setSearchTerm('')}
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
            iconName={SearchInput.ICONS.SEARCH}
          />
          <SearchInput
            style={{ marginBottom: '1rem', maxWidth: '500px' }}
            placeholder="Test out a large search"
            onClear={() => setSearchTerm('')}
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
            size={SearchInput.SIZE.LARGE}
            iconName={SearchInput.ICONS.SEARCH}
          />
        </section>
        <section>
          <Callout variant={Callout.VARIANT.CAUTION}>
            Danger! Exercise extreme caution.
          </Callout>
          <Callout variant={Callout.VARIANT.IMPORTANT}>
            Important! I said, this is important.
          </Callout>
          <Callout variant={Callout.VARIANT.TIP}>Here's a tip.</Callout>
          <Callout variant={Callout.VARIANT.TIP} title="Hello">
            Here's a tip with a custom title
          </Callout>
          <Callout variant={Callout.VARIANT.TIP} title={null}>
            Here's a tip with no title
          </Callout>
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
          <h2>Terminal</h2>
          <Terminal>cd packages/gatsby-theme-newrelic</Terminal>

          <h2>Animated terminal</h2>
          <Terminal animate>
            {`
nr1 create --type nerdpack --name pageviews-app
[output] {success}✔  {plain}Component created successfully!
[output]    {purple}nerdpack {blue}pageviews-app {plain}is available at {green}"./pageviews-app"
            `}
          </Terminal>
        </section>
        <section>
          <h2>Buttons</h2>
          <h3>Variants</h3>
          <div
            css={css`
              display: flex;
              gap: 1rem;
              margin-bottom: 2rem;
              align-items: start;
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
          <h2>Simple Feedback</h2>
          <div
            css={css`
              max-width: 350px;
            `}
          >
            <SimpleFeedback title="Demo Site" slug="/demo/test-site" />
          </div>
        </section>

        <section>
          <TagList>
            <Tag>React</Tag>
            <Tag interactive>Agent</Tag>
          </TagList>
        </section>
      </Layout.Content>
      <Layout.PageTools
        css={css`
          @media screen and (max-width: 1280px) {
            display: none;
          }
        `}
      >
        <ContributingGuidelines fileRelativePath="demo/src/pages/index.js" />
        <PageTools.Section>
          <PageTools.Title>How to use</PageTools.Title>
          <p>
            The <code>PageTools</code> component is great for use as a sidebar
            to give page-specific context to a user
          </p>
        </PageTools.Section>
      </Layout.PageTools>
    </Layout.Main>
  );
};

export default IndexPage;
