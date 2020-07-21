import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';
import DarkModeToggle from './DarkModeToggle';
import ExternalLink from './ExternalLink';
import NewRelicLogo from './NewRelicLogo';
import Icon from './Icon';

const NavLink = styled(ExternalLink)`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0.25rem 9px;
  color: var(--secondary-text-color);
  font-size: 0.6875rem;
  transition: 0.2s;

  &:hover {
    background-color: var(--color-neutrals-200);
    color: var(--color-neutrals-700);

    .dark-mode & {
      background-color: var(--color-dark-200);
      color: var(--color-dark-700);
    }
  }
`;

const ActionLink = styled(ExternalLink)`
  display: flex;
  align-items: center;
`;

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

const GlobalHeader = ({ editLink, className }) => {
  const { site } = useStaticQuery(graphql`
    query GlobalHeaderQuery {
      site {
        siteMetadata {
          repository
        }
      }
    }
  `);

  const { repository } = site.siteMetadata;

  return (
    <div
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
            className={styles.logoContainer}
            css={css`
              display: flex;
              align-items: center;
              margin-right: 1rem;
            `}
          >
            <NewRelicLogo />
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
              <NavLink href="https://developer.newrelic.com/">
                Developers
              </NavLink>
            </li>
            <li className={styles.leftSideLinkItem}>
              <NavLink href="https://opensource.newrelic.com/">
                Open Source
              </NavLink>
            </li>
            <li>
              <NavLink href="https://docs.newrelic.com/">Documentation</NavLink>
            </li>
            <li>
              <NavLink href="https://discuss.newrelic.com/">Community</NavLink>
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
          {editLink && (
            <li>
              <ActionLink href={editLink}>
                <Icon
                  css={styles.actionIcon}
                  name={Icon.TYPE.EDIT}
                  size="0.875rem"
                />
              </ActionLink>
            </li>
          )}
          {repository && (
            <li>
              <ActionLink href={`${repository}/issues/new/choose`}>
                <Icon
                  css={styles.actionIcon}
                  name={Icon.TYPE.GITHUB}
                  size="0.875rem"
                />
              </ActionLink>
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
  editLink: PropTypes.string,
};

export default GlobalHeader;
