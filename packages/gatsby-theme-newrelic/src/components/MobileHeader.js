import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import Link from './Link';
import Logo from './Logo';
import HamburgerMenu from './HamburgerMenu';
import MobileNavigation from './MobileNavigation';
import { graphql, useStaticQuery } from 'gatsby';
import { useToggle } from 'react-use';
import useWarning from '../hooks/useWarning';

const MobileHeader = ({ children, className }) => {
  const [isOpen, toggle] = useToggle(false);

  const {
    site: {
      layout: { mobileBreakpoint },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        layout {
          mobileBreakpoint
        }
      }
    }
  `);

  useWarning(
    mobileBreakpoint,
    'MobileHeader: The mobile breakpoint is missing. Please set the `layout.mobileBreakpoint` option in `gatsby-config.js`'
  );

  return (
    <header
      css={css`
        display: none;
        padding: 1rem 1.5rem;
        justify-content: space-between;
        align-items: center;

        @media screen and (max-width: ${mobileBreakpoint}) {
          display: flex;
        }
      `}
      className={className}
    >
      <Link
        to="/"
        css={css`
          text-decoration: none;
        `}
      >
        <Logo
          width="150px"
          css={css`
            display: block;
          `}
        />
      </Link>
      <div
        css={css`
          display: flex;
          flex-direction: row;
          align-items: center;
        `}
      >
        <HamburgerMenu onToggle={toggle} isOpen={isOpen} />
      </div>
      <MobileNavigation isOpen={isOpen} onClose={() => toggle(false)}>
        {children}
      </MobileNavigation>
    </header>
  );
};

MobileHeader.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default MobileHeader;
