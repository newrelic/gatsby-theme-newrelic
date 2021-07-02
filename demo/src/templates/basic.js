import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
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
      <Layout.Main
        css={css`
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
          <SimpleFeedback pageTitle="Demo Site" />
          <ContributingGuidelines
            fileRelativePath={fields.fileRelativePath}
            pageTitle={frontmatter.title}
          />
          <TableOfContents headings={headings} />
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
  query ($slug: String!) {
    mdx(slug: { eq: $slug }) {
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
