import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { graphql } from 'gatsby';
import {
  ContributingGuidelines,
  SEO,
  Layout,
  MarkdownContainer,
  MDX,
  RelatedResources,
  SimpleFeedback,
} from '@newrelic/gatsby-theme-newrelic';

const BasicTemplate = ({ data, location }) => {
  const {
    mdx: { body, frontmatter, fields, relatedResources },
  } = data;

  return (
    <>
      <SEO location={location} title={frontmatter.title} />
      <Layout.Main
        css={css`
          display: grid;
          grid-template-areas:
            'page-title page-tools'
            'content page-tools';
          grid-template-columns: minmax(0, 1fr) 320px;
          grid-column-gap: var(--site-content-padding);
        `}
      >
        <h1
          css={css`
            grid-area: page-title;
          `}
        >
          {frontmatter.title}
        </h1>
        <Layout.Content>
          <MarkdownContainer>
            <MDX body={body} />
          </MarkdownContainer>
        </Layout.Content>

        <Layout.PageTools>
          <SimpleFeedback title="Demo Site" slug="/demo/test-site" />
          <ContributingGuidelines
            fileRelativePath={fields.fileRelativePath}
            pageTitle={frontmatter.title}
          />
          <RelatedResources resources={relatedResources} />
        </Layout.PageTools>
      </Layout.Main>
    </>
  );
};

BasicTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(slug: { eq: $slug }) {
      body
      frontmatter {
        title
      }
      fields {
        fileRelativePath
      }
      relatedResources {
        title
        url
      }
    }
  }
`;

export default BasicTemplate;
