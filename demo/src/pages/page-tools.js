import React from 'react';
import {
  Layout,
  ContributingGuidelines,
  ComplexFeedback,
  RelatedResources,
} from '@newrelic/gatsby-theme-newrelic';
import PropsDisplay from '../components/PropsDisplay';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import findComponentData from '../utils/findComponentData';

const PageTools = ({ data }) => {
  const componentsData = data.allJson.edges;
  const ContributingGuidelinesData = findComponentData(
    'ContributingGuidelines',
    componentsData
  );
  const ComplexFeedbackData = findComponentData(
    'ComplexFeedback',
    componentsData
  );
  const RelatedResourcesData = findComponentData(
    'RelatedResources',
    componentsData
  );

  return (
    <Layout.Main>
      <Layout.Content>
        <PropsDisplay componentInfo={ContributingGuidelinesData}>
          <ContributingGuidelines fileRelativePath="demo/src/pages/PageTools.js" />
        </PropsDisplay>
        <PropsDisplay componentInfo={ComplexFeedbackData}>
          <ComplexFeedback />
        </PropsDisplay>
        <PropsDisplay componentInfo={RelatedResourcesData}>
          <RelatedResources
            resources={[
              {
                url: 'https://newrelic.com/instant-observability/',
                title: 'developer',
              },
            ]}
          />
        </PropsDisplay>
      </Layout.Content>
    </Layout.Main>
  );
};

PageTools.propTypes = {
  data: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query PageToolsQuery {
    allJson(
      filter: {
        displayName: {
          in: [
            "ContributingGuidelines"
            "TableOfContents"
            "ComplexFeedback"
            "RelatedResources"
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

export default PageTools;
