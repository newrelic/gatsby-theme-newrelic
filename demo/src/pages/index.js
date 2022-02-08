/* eslint-disable no-alert */
import React, { useState } from 'react';
import { css } from '@emotion/react';
import {
  Button,
  CodeBlock,
  Callout,
  Collapser,
  CollapserGroup,
  ContributingGuidelines,
  Layout,
  Link,
  PageTools,
  RelatedResources,
  SearchInput,
  SimpleFeedback,
  Surface,
  Table,
  Tag,
  TagList,
  Terminal,
  Video,
  useTranslation,
  ExternalLink,
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

const codeSampleWithAdditionalTags = `
query AccountQuery(<var>$accountId:</var> ID!) {
  <a href="/build-apps">account</a>(id: <var>$accountId</var>) {
    <a href="/build-apps/build-hello-world-app"><var>name</var></a>
  }
}
`;

const anotherSample = `
---
apiVersion: v1
kind: ConfigMap
metadata:
  name: <mark>nri-integration-cfg</mark>
  namespace: default
data:
<mark>  apache-config.yaml: |
    ---
    # Run auto discovery to find pods with label "app=apache"
    # https://docs.newrelic.com/docs/integrations/host-integrations/installation/container-auto-discovery
    discovery:
      command:
        # Use the optional arguments:
        # --namespaces: Comma separated namespaces to discover pods on
        # --tls: Use secure (TLS) connection
        # --port: Port used to connect to the kubelet. Default is 10255
        exec: /var/db/newrelic-infra/nri-discovery-kubernetes --port <var>PORT</var> --tls
        match:
          label.app: apache
    <a href="https://one.newrelic.com">integrations</a>:
      - name: nri-apache
        env:
          # Use the discovered IP as the host address
          STATUS_URL: http://\${discovery.ip}/server-status?auto
          METRICS: 1</mark>
`;

const xmlSample = `
<dependency>
  <groupId>com.newrelic.agent.java</groupId>
  <artifactId>newrelic-java</artifactId>
  <version><var>JAVA_AGENT_VERSION</var></version>
  <scope>provided</scope>
  <type>zip</type>
</dependency>
`;

const IndexPage = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Layout.Main
      css={css`
        display: grid;
        grid-template-columns: minmax(0, 1fr) 320px;
        grid-template-areas: 'content page-tools';
        grid-gap: var(--site-content-padding);

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
        `}
      >
        <h1>{t('home.welcome')}</h1>
        <p>{t('home.intro')}</p>
        <section>
          <h2>Search inputs</h2>
          <SearchInput
            style={{ margin: '1rem 0', maxWidth: '500px' }}
            placeholder="Test out a small search"
            onClear={() => setSearchTerm('')}
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
            size={SearchInput.SIZE.SMALL}
          />
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
          <h2>Collapsers</h2>
          <CollapserGroup>
            <Collapser id="example-1" title="Check out this cool collapser">
              This is a pretty neat little utility. I can show all kinds of
              stuff in here.
            </Collapser>
            <Collapser title={<code>api_doc</code>}>
              You can even use JSX in the title
            </Collapser>
            <Collapser title="This one is open by default" defaultOpen>
              And you can see everything inside of it!
            </Collapser>
          </CollapserGroup>
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
          <Callout variant={Callout.VARIANT.COURSE}>
            This callout is for a guide that is part of a super cool course
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
          <h2>Code block w/ embedded var/mark/links</h2>
          <CodeBlock
            language="graphql"
            css={css`
              margin-bottom: 1rem;
            `}
          >
            {codeSampleWithAdditionalTags}
          </CodeBlock>
          <CodeBlock
            language="yaml"
            css={css`
              margin-bottom: 1rem;
            `}
          >
            {anotherSample}
          </CodeBlock>
          <CodeBlock language="xml">{xmlSample}</CodeBlock>
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
              flex-wrap: wrap;
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
          <RelatedResources
            resources={[
              {
                url: 'https://newrelic.com/instant-observability/',
                title: 'developer',
              },
            ]}
          />
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
          <h2>Surfaces as other elements</h2>
          <div
            css={css`
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
              grid-gap: 2rem;
              padding: 1rem;
            `}
          >
            <Surface
              base={Surface.BASE.PRIMARY}
              to="foobar"
              as={Link}
              css={css`
                padding: 2rem;
              `}
            >
              I'm a link!
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
          <h2>Internal Links</h2>
          <p>
            This <Link to="/build-apps">Internal Link</Link> automatically uses
            localized path if on translated site.
          </p>
          <p>
            This{' '}
            <Link to="/build-apps" shouldAutoLocalize={false}>
              Internal Link
            </Link>{' '}
            does not automatically use localized path if on translated site.
          </p>
        </section>
        <section>
          <h2>External Links</h2>
          <Surface
            base={Surface.BASE.PRIMARY}
            to="https://newrelic.com"
            as={Link}
            css={css`
              padding: 5px;
            `}
            displayExternalIcon
          >
            Surface
          </Surface>
          <Button as={Link} displayExternalIcon to="https://newrelic.com">
            Button
          </Button>
          <ExternalLink to="https://newrelic.com" displayExternalIcon>
            External Link
          </ExternalLink>
        </section>
        <section>
          <h2>Tables</h2>
          <Table>
            <thead>
              <tr>
                <td>Col 1</td>
                <td>Col 2</td>
                <td>Col 3</td>
                <td>Col 4</td>
                <td>Col 5</td>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                <tr key={num}>
                  <td>Row {num} - Column 1</td>
                  <td>Row {num} - Column 2</td>
                  <td>Row {num} - Column 3</td>
                  <td>Row {num} - Column 4</td>
                  <td>Row {num} - Column 5</td>
                </tr>
              ))}
            </tbody>
          </Table>
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
        <SimpleFeedback pageTitle="Demo Site" />
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
