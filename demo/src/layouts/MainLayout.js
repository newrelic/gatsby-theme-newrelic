import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import {
  CookieConsentDialog,
  HamburgerMenu,
  GlobalHeader,
  Layout,
  Link,
  Logo,
  MobileNavigation,
  Navigation,
  NavItem,
  SearchInput,
  SEO,
} from '@newrelic/gatsby-theme-newrelic';
import nav from '../data/sidenav.json';

const MainLayout = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { children, pageContext, location } = props;

  return (
    <>
      <SEO location={location} />
      <GlobalHeader />
      <header
        css={css`
          display: none;
          padding: 1rem var(--site-content-padding);
          justify-content: space-between;
          align-items: center;

          @media screen and (max-width: 760px) {
            display: flex;
          }
        `}
      >
        <Logo />
        <HamburgerMenu
          onToggle={() => setIsMenuOpen((isOpen) => !isOpen)}
          isOpen={isMenuOpen}
        />
        <MobileNavigation
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
        >
          {nav.map((page) => (
            <NavItem key={page.url} page={page} />
          ))}
        </MobileNavigation>
      </header>
      <Layout>
        <Layout.Sidebar>
          <Link to="/">
            <Logo width="150px" />
          </Link>
          <SearchInput
            placeholder="Filter navigation"
            onClear={() => setSearchTerm('')}
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
            css={css`
              margin-top: 1rem;
              margin-bottom: 1.5rem;
            `}
          />
          <Navigation searchTerm={searchTerm}>
            {nav.map((page) => (
              <NavItem key={page.url} page={page} />
            ))}
          </Navigation>
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
