import React from 'react';
import { CodeBlock, Layout, Terminal } from '@newrelic/gatsby-theme-newrelic';
import { css } from '@emotion/react';
import PropsDisplay from '../components/PropsDisplay';
import { graphql } from 'gatsby';

const tempData = {
  description: '',
  displayName: 'Banner',
  methods: [],
  props: [
    { name: 'children', type: 'node', required: true, description: '' },
    { name: 'onClose', type: 'func', required: true, description: '' },
    { name: 'visible', type: 'bool', required: true, description: '' },
  ],
};

const CodeExamples = ({ data }) => {
  const componentsData = data.allJson.edges;
  console.log(data);
  return (
    <Layout.Main
      css={css`
        width: 100%;
      `}
    >
      <Layout.Content>
        <CodeBlock language="json">This is a code block</CodeBlock>
        <PropsDisplay componentInfo={data.allJson.edges[0].node} />
      </Layout.Content>
    </Layout.Main>
  );
};

export const pageQuery = graphql`
  query MyQuery {
    allJson(filter: { displayName: { in: ["Terminal", "CodeBlock"] } }) {
      edges {
        node {
          description
          displayName
          props {
            description
            name
            required
            type
          }
        }
      }
    }
  }
`;

export default CodeExamples;
