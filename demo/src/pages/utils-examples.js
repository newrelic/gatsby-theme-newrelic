import React from 'react';
import {
  Video,
  Lightbox,
  Walkthrough,
  Tag,
  Layout,
  TagList,
} from '@newrelic/gatsby-theme-newrelic';
import { css } from '@emotion/react';
import PropsDisplay from '../components/PropsDisplay';
import { graphql } from 'gatsby';
import findComponentData from '../utils/findComponentData';
import regularImage from '../images/apm-intro-overview.png';

const UtilsExamples = ({ data }) => {
  console.log('data', data);
  const componentsData = data.allJson.edges;
  const videoData = findComponentData('Video', componentsData);
  const lightboxData = findComponentData('Lightbox', componentsData);
  const walkthroughData = findComponentData('Walkthrough', componentsData);

  return (
    <Layout.Main
      css={css`
        width: 100%;
      `}
    >
      <Layout.Content>
        <PropsDisplay componentInfo={videoData}>
          <Video id="inyshp3m7r" type={Video.TYPE.WISTIA} width="500px" />
        </PropsDisplay>
        <PropsDisplay componentInfo={lightboxData}>
          <Lightbox>
            <img
              alt="a very average screenshot"
              css={css`
                width: 100%;
              `}
              src={regularImage}
            />
          </Lightbox>
        </PropsDisplay>
        <PropsDisplay componentInfo={walkthroughData}>
          <Walkthrough>
            <Walkthrough.Step title="The first step" id="step1">
              hello there!
            </Walkthrough.Step>
            <Walkthrough.Step title="The next step" id="step2" active>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Walkthrough.Step>
            <Walkthrough.Step title="The last step" id="step3">
              finished
            </Walkthrough.Step>
          </Walkthrough>
        </PropsDisplay>
        <Tag interactive>Agent</Tag>
      </Layout.Content>
    </Layout.Main>
  );
};

export const pageQuery = graphql`
  query UtilsQuery {
    allJson(
      filter: { displayName: { in: ["Video", "Lightbox", "Walkthrough"] } }
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

export default UtilsExamples;
