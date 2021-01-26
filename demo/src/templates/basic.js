import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { SEO, Layout, MDXContainer } from '@newrelic/gatsby-theme-newrelic';

const BasicTemplate = ({ data, location }) => {
  const {
    mdx: { body, frontmatter },
  } = data;

  return (
    <Layout.Main>
      <SEO location={location} title={frontmatter.title} />
      <h1>{frontmatter.title}</h1>
      <Layout.Content>
        <MDXContainer body={body} />
      </Layout.Content>
    </Layout.Main>
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
    }
  }
`;

export default BasicTemplate;
