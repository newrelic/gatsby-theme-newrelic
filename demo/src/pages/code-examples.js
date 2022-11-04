import React from 'react';
import { CodeBlock, Layout, Terminal } from '@newrelic/gatsby-theme-newrelic';
import { css } from '@emotion/react';
import PropsDisplay from '../components/PropsDisplay';
import { graphql } from 'gatsby';
import findComponentData from '../utils/findComponentData';

const CodeExamples = ({ data }) => {
  const componentsData = data.allJson.edges;
  const codeBlockData = findComponentData('CodeBlock', componentsData);
  const terminalData = findComponentData('Terminal', componentsData);

  return (
    <Layout.Main
      css={css`
        width: 100%;
      `}
    >
      <Layout.Content>
        <PropsDisplay componentInfo={codeBlockData}>
          <CodeBlock language="json">This is a code block</CodeBlock>
        </PropsDisplay>
        <PropsDisplay componentInfo={terminalData}>
          <Terminal>This is a terminal</Terminal>
        </PropsDisplay>
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
