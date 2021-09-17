import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import {
  GlobalHeader,
  Layout,
  Link,
  Logo,
  MobileHeader,
  Navigation,
  NavItem,
  SearchInput,
  SEO,
} from '@newrelic/gatsby-theme-newrelic';
import nav from '../data/sidenav.json';

const MainLayout = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const { children, pageContext, location } = props;

  return (
    <>
      <SEO location={location} />
      <GlobalHeader />
      <MobileHeader>
        {nav.map((page, index) => (
          <NavItem key={`mobile${index}${page.url}`} page={page} />
        ))}
      </MobileHeader>
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
            {nav.map((page, index) => (
              <NavItem key={`nav${index}${page.url}`} page={page} />
            ))}
          </Navigation>
        </Layout.Sidebar>
        {children}
        <Layout.Footer fileRelativePath={pageContext.fileRelativePath} />
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
