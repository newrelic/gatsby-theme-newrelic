import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import {
  ContributingGuidelines,
  SEO,
  Layout,
  MarkdownContainer,
  MDX,
  RelatedResources,
  SimpleFeedback,
  TableOfContents,
} from '@newrelic/gatsby-theme-newrelic';
import GitHubSlugger from 'github-slugger';
import toString from 'mdast-util-to-string';

const BasicTemplate = ({ data, location }) => {
  const slugger = useMemo(() => new GitHubSlugger(), []);
  const {
    mdx: { body, frontmatter, fields, relatedResources, mdxAST },
  } = data;

  const headings = useMemo(() => {
    return mdxAST.children
      .filter(
        (node) =>
          node.type === 'heading' &&
          node.depth === 2 &&
          node.children.length > 0
      )
      .map((heading) => {
        const text = toString(heading);

        return { id: slugger.slug(text), text };
      });
  }, [mdxAST, slugger]);

  return (
    <>
      <SEO location={location} title={frontmatter.title} />
      <Main>
        <Title>{frontmatter.title}</Title>
        <Layout.Content>
          <MarkdownContainer>
            <MDX body={body} />
          </MarkdownContainer>
        </Layout.Content>

        <Layout.PageTools>
          <SimpleFeedback pageTitle="Demo Site" />
          <ContributingGuidelines
            fileRelativePath={fields.fileRelativePath}
            pageTitle={frontmatter.title}
          />
          <TableOfContents headings={headings} />
          <RelatedResources resources={relatedResources} />
        </Layout.PageTools>
      </Main>
    </>
  );
};

BasicTemplate.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

const Main = styled(Layout.Main)`
  display: grid;
  grid-template-areas:
    'page-title page-tools'
    'content page-tools';
  grid-template-columns: minmax(0, 1fr) 320px;
  grid-column-gap: var(--site-content-padding);

  @media screen and (max-width: 760px) {
    grid-template-areas:
      'page-title'
      'content'
      'page-tools';
    grid-template-columns: minmax(0, 1fr);
  }
`;

const Title = styled.h1`
  grid-area: page-title;
`;

export const pageQuery = graphql`
  query ($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      mdxAST
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
