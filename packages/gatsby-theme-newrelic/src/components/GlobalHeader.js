import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { graphql, useStaticQuery } from 'gatsby';
import DarkModeToggle from './DarkModeToggle';
import ExternalLink from './ExternalLink';
import NewRelicLogo from './NewRelicLogo';
import Icon from './Icon';
import GlobalNavLink from './GlobalNavLink';
import useMedia from 'use-media';

const styles = {
  actionLink: css`
    display: flex;
    align-items: center;
  `,
  actionIcon: css`
    transition: all 0.2s ease-out;
    color: var(--secondary-text-color);

    &:hover {
      color: var(--secondary-text-hover-color);
    }
  `,
};

const GlobalHeader = ({ editUrl, className }) => {
  const { site } = useStaticQuery(graphql`
    query GlobalHeaderQuery {
      site {
        layout {
          contentPadding
          maxWidth
        }
        siteMetadata {
          repository
          siteUrl
        }
      }
    }
  `);

  const hideLogoText = useMedia({ maxWidth: '600px' });
  const hideMenuLinks = useMedia({ maxWidth: '530px' });

  const {
    layout,
    siteMetadata: { repository },
  } = site;

  return (
    <div
      data-swiftype-index={false}
      className={className}
      css={css`
        background-color: var(--color-neutrals-100);
        overflow: hidden;
        position: sticky;
        top: 0;
        z-index: 80;

        .dark-mode & {
          background-color: var(--color-dark-100);
        }
      `}
    >
      <div
        css={css`
          height: 30px;
          display: flex;
          justify-content: space-between;
          max-width: ${layout.maxWidth};
          margin: 0 auto;
          padding: 0 ${layout.contentPadding};
        `}
      >
        <nav
          css={css`
            display: flex;
            align-items: center;
            height: 100%;
          `}
        >
          <ExternalLink
            href="https://newrelic.com/"
            css={css`
              display: flex;
              align-items: center;
              margin-right: 1rem;
            `}
          >
            <NewRelicLogo omitText={hideLogoText} />
          </ExternalLink>

          <ul
            css={css`
              height: 100%;
              margin: 0;
              padding: 0;
              display: flex;
              list-style-type: none;
              white-space: nowrap;
            `}
          >
            <li>
              <GlobalNavLink href="https://developer.newrelic.com/">
                Developers
              </GlobalNavLink>
            </li>
            <li>
              <GlobalNavLink href="https://opensource.newrelic.com/">
                Open Source
              </GlobalNavLink>
            </li>
            <li>
              <GlobalNavLink href="https://docs.newrelic.com/">
                Documentation
              </GlobalNavLink>
            </li>
            <li>
              <GlobalNavLink href="https://discuss.newrelic.com/">
                Community
              </GlobalNavLink>
            </li>
          </ul>
        </nav>

        <ul
          css={css`
            margin: 0;
            padding: 0;
            display: flex;
            list-style-type: none;
            align-items: center;

            > li {
              transition: all 0.2s ease-out;
              margin-left: 1rem;
              color: var(--secondary-text-color);
            }
          `}
        >
          {editUrl && !hideMenuLinks && (
            <li>
              <ExternalLink css={styles.actionLink} href={editUrl}>
                <Icon
                  css={styles.actionIcon}
                  name={Icon.TYPE.EDIT}
                  size="0.875rem"
                />
              </ExternalLink>
            </li>
          )}
          {repository && !hideMenuLinks && (
            <li>
              <ExternalLink
                css={styles.actionLink}
                href={`${repository}/issues/new/choose`}
              >
                <Icon
                  css={styles.actionIcon}
                  name={Icon.TYPE.GITHUB}
                  size="0.875rem"
                />
              </ExternalLink>
            </li>
          )}
          <li>
            <DarkModeToggle css={styles.actionIcon} size="0.875rem" />
          </li>
        </ul>
      </div>
    </div>
  );
};

GlobalHeader.propTypes = {
  className: PropTypes.string,
  editUrl: PropTypes.string,
};

export default GlobalHeader;
