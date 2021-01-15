import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import {
  CookieConsentDialog,
  HamburgerMenu,
  GlobalHeader,
  Layout,
  Logo,
  NavItem,
  NewRelicLogo,
  useLayout,
  SEO,
} from '@newrelic/gatsby-theme-newrelic';
import { Link } from 'gatsby';
import nav from '../data/sidenav.json';

const MainLayout = (props) => {
  const { contentPadding } = useLayout();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { children, pageContext, location } = props;

  return (
    <>
      <SEO location={location} />
      <GlobalHeader />
      <header
        css={css`
          display: none;
          padding: 1rem ${contentPadding};
          justify-content: space-between;
          align-items: center;

          @media screen and (max-width: 400px) {
            display: flex;
          }
        `}
      >
        <NewRelicLogo />
        <HamburgerMenu
          onToggle={() => setIsMenuOpen((isOpen) => !isOpen)}
          isOpen={isMenuOpen}
        />
      </header>
      <Layout>
        <Layout.Sidebar>
          <Link to="/">
            <Logo width="150px" />
          </Link>
          <nav
            role="navigation"
            css={css`
              margin-top: 2rem;
            `}
          >
            {nav.map((page) => (
              <NavItem key={page.url} page={page} />
            ))}
          </nav>
        </Layout.Sidebar>
        {children}
        <Layout.Footer fileRelativePath={pageContext.fileRelativePath} />
        <CookieConsentDialog />
      </Layout>
    </>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
  pageContext: PropTypes.object,
  location: PropTypes.object,
};

export default MainLayout;
