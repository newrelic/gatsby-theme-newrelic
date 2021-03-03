import React from 'react';
import CodeBlock from '../CodeBlock';
import { render, fireEvent, screen } from '@testing-library/react';
import { renderWithTranslation } from '../../test-utils/renderHelpers';

jest.mock('tessen', () => ({
  page: () => {},
  track: () => {},
}));

jest.mock('gatsby', () => ({
  __esModule: true,
  graphql: () => {},
  Link: ({ to, ...props }) => <a href={to} {...props} />,
  useStaticQuery: () => ({
    allLocale: {
      nodes: [
        {
          name: 'English',
          locale: 'en',
          localizedPath: '/en',
          isDefault: true,
        },
      ],
    },
    site: {
      siteMetadata: {
        siteUrl: 'https://github.com/foo/bar',
        repository: 'https://foobar.net',
      },
    },
  }),
}));

test('renders embedded var tag', () => {
  const { container } = renderWithTranslation(
    <CodeBlock language="graphql">{`
query MyQuery(<var>$accountId</var>: ID!) {
  account(accountId: <var>$accountId</var>) {
    name
  }
}
    `}</CodeBlock>
  );

  const vars = container.querySelectorAll('var');

  expect(vars.length).toEqual(2);
  expect(vars[0].textContent).toEqual('$accountId');
  expect(vars[1].textContent).toEqual('$accountId');
});

test('renders embedded mark tags', () => {
  const { container } = renderWithTranslation(
    <CodeBlock language="graphql">{`
query <mark>MyQuery</mark>($accountId: ID!) {
  <mark>account(accountId: $accountId) {
    name
  }</mark>
}
    `}</CodeBlock>
  );

  const marks = container.querySelectorAll('mark');

  expect(marks.length).toEqual(2);
  expect(marks[0].textContent).toEqual('MyQuery');
  expect(marks[1].textContent).toEqual(`account(accountId: $accountId) {
    name
  }`);
});

test('renders embedded anchor tags', () => {
  const { container } = renderWithTranslation(
    <CodeBlock language="graphql">{`
query MyQuery($accountId: ID!) {
  <a href="/docs/nerd-graph">account</a>(accountId: $accountId) {
    name
  }
}
    `}</CodeBlock>
  );

  const anchors = container.querySelectorAll('a');

  expect(anchors.length).toEqual(1);
  expect(anchors[0].textContent).toEqual('account');
  expect(anchors[0].getAttribute('href')).toEqual('/docs/nerd-graph');
});

test('handles combinations of tags', () => {
  const { container } = renderWithTranslation(
    <CodeBlock language="graphql">{`
query MyQuery($accountId: ID!) {
  <a href="/docs/nerd-graph"><var>account</var></a>(accountId: $accountId) {
    name
  }
}
    `}</CodeBlock>
  );

  const anchors = container.querySelectorAll('a');
  const vars = container.querySelectorAll('var');

  expect(anchors.length).toEqual(1);
  expect(vars.length).toEqual(1);
});

test('leaves text as-is if other HTML tags are used', () => {
  const { container, debug } = renderWithTranslation(
    <CodeBlock language="graphql">{`
query <span>MyQuery</span>($accountId: ID!) {
  account(<strong>accountId</strong>: $accountId) {
    name
  }
}
    `}</CodeBlock>
  );

  const code = container.querySelector('code');

  expect(code.textContent).toEqual(
    `query <span>MyQuery</span>($accountId: ID!) {  account(<strong>accountId</strong>: $accountId) {    name  }}`
  );
});

test('leaves var/mark/a tags as raw text when language is html', () => {
  const { container } = renderWithTranslation(
    <CodeBlock language="html">{`
    <!DOCTYPE html>
    <html>
      <body>
        <div>
          <var>$accountId</var>
          <mark>Highlight it up!</mark>
          <a href="/docs/nrql">A link</a>
        </div>
      </body>
    </html>
    `}</CodeBlock>
  );

  const vars = container.querySelectorAll('var');

  expect(container.querySelectorAll('var').length).toEqual(0);
  expect(container.querySelectorAll('mark').length).toEqual(0);
  expect(container.querySelectorAll('a').length).toEqual(0);
});

test('handles xml tags if no language is specified', () => {
  const { container } = renderWithTranslation(
    <CodeBlock>{`
<dependency>
  <groupId>com.newrelic.agent.java</groupId>
  <artifactId>newrelic-java</artifactId>
  <version><var>JAVA_AGENT_VERSION</var></version>
  <scope>provided</scope>
  <type>zip</type>
</dependency>
    `}</CodeBlock>
  );

  const vars = container.querySelectorAll('var');

  expect(vars.length).toEqual(1);
  expect(vars[0].textContent).toEqual('JAVA_AGENT_VERSION');
});
