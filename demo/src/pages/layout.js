import React from 'react';
import {
  Layout,
  Collapser,
  CollapserGroup,
  Tabs,
  Table,
  SideBySide,
  Side,
  CodeBlock,
} from '@newrelic/gatsby-theme-newrelic';
import { graphql } from 'gatsby';
import { css } from '@emotion/react';
import PropsDisplay from '../components/PropsDisplay';
import findComponentData from '../utils/findComponentData';

const LayoutPage = ({ data }) => {
  const componentsData = data.allJson.edges;
  const collapserData = findComponentData('Collapser', componentsData);
  const collapserGroupData = findComponentData(
    'CollapserGroup',
    componentsData
  );
  const tabsData = findComponentData('Tabs', componentsData);
  const tableData = findComponentData('Table', componentsData);
  const sideData = findComponentData('Side', componentsData);
  const sideBySideData = findComponentData('SideBySide', componentsData);

  return (
    <Layout.Main>
      <Layout.Content>
        <PropsDisplay componentInfo={collapserData}>
          <Collapser title="This is a single collapser.">
            These are the contents.
          </Collapser>
        </PropsDisplay>
        <PropsDisplay componentInfo={collapserGroupData}>
          <CollapserGroup>
            <Collapser title="Want to group multiple collapsers?">
              You can do that, too!
            </Collapser>
            <Collapser title="Here's a second collapser..." defaultOpen>
              This one is already open.
            </Collapser>
            <Collapser title={<code>Adding a code snippet?</code>}>
              You can even put JSX in the title.
            </Collapser>
          </CollapserGroup>
        </PropsDisplay>
        <PropsDisplay componentInfo={tabsData}>
          <Tabs>
            <Tabs.Bar>
              <Tabs.BarItem id="list-page">List</Tabs.BarItem>
              <Tabs.BarItem id="code-page">Code</Tabs.BarItem>
              <Tabs.BarItem id="text-page">Text</Tabs.BarItem>
            </Tabs.Bar>
            <Tabs.Pages>
              <Tabs.Page id="list-page">
                <p>
                  The Tabs component groups content into pages you can click
                  through. This page contains a list:
                </p>
                <ul>
                  <li>Lorem</li>
                  <li>ipsum</li>
                  <li>dolor</li>
                </ul>
              </Tabs.Page>
              <Tabs.Page id="code-page">
                <p>This page contains a code block:</p>
                <CodeBlock language="javascript">{jsExample}</CodeBlock>
              </Tabs.Page>
              <Tabs.Page id="text-page">
                <p>And this page contains some text:</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus a egestas nulla, nec eleifend dolor. Praesent risus
                  felis, maximus vitae nunc id, aliquam varius mauris. Ut
                  aliquet sagittis eros ac sodales. In faucibus justo vitae
                  nulla pellentesque pulvinar. Praesent nec diam eu turpis
                  consectetur rhoncus. Mauris a tincidunt orci. Nam consectetur
                  erat non sagittis eleifend. Aenean id auctor sapien.
                </p>
              </Tabs.Page>
            </Tabs.Pages>
          </Tabs>
        </PropsDisplay>
        <PropsDisplay componentInfo={tableData}>
          <Table>
            <thead>
              <tr>
                <td>Col 1</td>
                <td>Col 2</td>
                <td>Col 3</td>
              </tr>
            </thead>
            <tbody>
              {Array(5)
                .fill()
                .map((item, i) => (
                  <tr>
                    <td>Item {i * 3 + 1}</td>
                    <td>Item {i * 3 + 2}</td>
                    <td>Item {i * 3 + 3}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </PropsDisplay>
        <PropsDisplay componentInfo={sideData}>
          <Side>
            A column of content, to be passed as a child to SideBySide.
          </Side>
        </PropsDisplay>
        <PropsDisplay componentInfo={sideBySideData}>
          <SideBySide>
            <Side>
              <h4> This Side contains a code block. </h4>
              <CodeBlock language="json">{jsonExample}</CodeBlock>
            </Side>
            <Side>
              <h4>And this Side contains text.</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                pulvinar ante eget purus porttitor suscipit. Donec a eros eget
                ante elementum sollicitudin.
              </p>
              <p>
                Quisque ut dui posuere, faucibus enim eu, convallis eros.
                Curabitur sodales sapien eu lorem dapibus, sed ullamcorper sem
                faucibus. Nullam bibendum risus lacinia erat congue, at
                efficitur quam tempus.
              </p>
            </Side>
          </SideBySide>
        </PropsDisplay>
      </Layout.Content>
    </Layout.Main>
  );
};

export const pageQuery = graphql`
  query LayoutQuery {
    allJson(
      filter: {
        displayName: {
          in: [
            "Collapser"
            "CollapserGroup"
            "Tabs"
            "Table"
            "SideBySide"
            "Side"
          ]
        }
      }
    ) {
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

const jsExample = `
const saySomeGibberish = () => {
    console.log('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
};

saySomeGibberish();
`;

const jsonExample = `{ 
    apples: 3, 
    bananas: 4, 
    carrots: 1 
}`;

export default LayoutPage;
