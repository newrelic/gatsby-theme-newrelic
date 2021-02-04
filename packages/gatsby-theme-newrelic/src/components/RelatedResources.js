import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { graphql, useStaticQuery } from 'gatsby';
import PageTools from './PageTools';
import Tag from './Tag';
import Icon from './Icon';
import Link from './Link';
import useThemeTranslation from '../hooks/useThemeTranslation';

const isRelative = (url) => url.startsWith('/');

const findLabel = (url, labels) => {
  const { label } = labels.find(({ baseUrl }) => url.startsWith(baseUrl)) || {};

  return label;
};

const RelatedResources = ({ resources, title }) => {
  const { t } = useThemeTranslation();
  const {
    site: {
      siteMetadata: { siteUrl },
    },
    newRelicThemeConfig: {
      relatedResources: { labels },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteUrl
        }
      }
      newRelicThemeConfig {
        relatedResources {
          labels {
            baseUrl
            label
          }
        }
      }
    }
  `);

  if (resources.length === 0) {
    return null;
  }

  const currentSiteLabel = findLabel(siteUrl, labels);

  return (
    <PageTools.Section>
      <PageTools.Title>{title || t('relatedResources.title')}</PageTools.Title>
      <nav>
        <ul
          css={css`
            list-style: none;
            margin: 0;
            padding: 0;
          `}
        >
          {resources.map((resource) => {
            const { url } = resource;
            const label = isRelative(url)
              ? currentSiteLabel
              : findLabel(url, labels);

            return (
              <li
                key={url}
                css={css`
                  font-size: 0.875rem;
                  margin-top: 0;

                  &:not(:last-child) {
                    margin-bottom: 0.75rem;
                  }
                `}
              >
                <Link
                  to={url}
                  css={css`
                    display: block;
                    margin-bottom: 0.25rem;
                  `}
                >
                  <span
                    css={css`
                      vertical-align: middle;
                    `}
                  >
                    {resource.title}
                  </span>

                  {!isRelative(url) && (
                    <Icon
                      name="fe-external-link"
                      css={css`
                        margin-left: 0.25rem;
                        vertical-align: middle;
                      `}
                    />
                  )}
                </Link>

                <Tag
                  css={css`
                    text-transform: uppercase;
                    font-size: 0.5625rem;
                    letter-spacing: 0.5px;
                  `}
                >
                  {label}
                </Tag>
              </li>
            );
          })}
        </ul>
      </nav>
    </PageTools.Section>
  );
};

RelatedResources.propTypes = {
  resources: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string,
};

export default RelatedResources;
