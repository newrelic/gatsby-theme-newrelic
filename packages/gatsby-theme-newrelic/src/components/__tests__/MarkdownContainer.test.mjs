import MarkdownContainer from '../MarkdownContainer.mjs';
import { render } from '@testing-library/react';

test(`renders children in a div with passed className`, () => {
  const { container } = render(
    <MarkdownContainer className="test-class">
      <p className="container-child"></p>
    </MarkdownContainer>
  );

  expect(
    container.querySelector('div.test-class > p.container-child')
  ).toBeVisible();
});

test(`renders html passed by dangerouslySetInnerHTML prop`, () => {
  // pulled from a docs whatsnew page graphql response
  // this is where we are using this component with the 'dangerouslySetInnerHTML' prop
  const mockedHTML = `<p>With the new API keys app you can create, view, and manage your user keys, ingest-license keys, and ingest-browser keys for your accounts. Any existing keys will continue to work as they have in the past.</p>\n<p>The new API keys page also has links to the Insights keys page and the old version of the API keys page, so you can still view and manage account-wide REST API and Admin API keys.</p>\n<p><img src=\"/6f4750ad7e9dfa6868ccff869009c5ae/api-keys-app.gif\" alt=\"An animated image showing where to find the new API Keys app.\" title=\"How to find the new API Keys app\" class=\"gatsby-resp-image-image\" style=\"width: 100%; height: auto; display: block; margin-left: auto; margin-right: auto; max-width: 850px;\"></p>\n<p>For more about how to find the UI and more about API keys, see <a href=\"https://docs.newrelic.com/docs/apis/intro-apis/new-relic-api-keys/#find\">API keys</a>.</p>`;

  const { container } = render(
    <MarkdownContainer
      className="test-class"
      dangerouslySetInnerHTML={{ __html: mockedHTML }}
    />
  );

  // the graphql result and the rendered html have inconsistent whitespace formatting
  expect(
    container.querySelector('div.test-class').innerHTML.replace(/\s+/g, ` `)
  ).toBe(mockedHTML.replace(/\s+/g, ` `));
});
