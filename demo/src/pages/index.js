import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { css } from '@emotion/core';
import {
  Button,
  Icon,
  GlobalHeader,
  NewRelicLogo,
  HamburgerMenu,
} from '@newrelic/gatsby-theme-newrelic';

const IndexPage = ({ data }) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  return (
    <>
      <GlobalHeader editUrl="https://github.com/newrelic/gatsby-theme-newrelic/tree/develop/demo/src/pages/index.js" />

      <header
        css={css`
          position: relative;
          border-bottom: 1px solid var(--divider-color);
          padding: 0 2rem;
          width: 100vw;
        `}
      >
        <div
          css={css`
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: var(--height-mobile-nav-bar);
          `}
        >
          <HamburgerMenu
            isOpen={isHamburgerOpen}
            toggle={() => setIsHamburgerOpen(!isHamburgerOpen)}
          />
        </div>
      </header>

      <div
        css={css`
          margin: 0 auto;
          padding: ${data.site.layout.contentPadding};
          max-width: ${data.site.layout.maxWidth};
        `}
      >
        <NewRelicLogo />
        <div>
          Check it out on <Icon name={Icon.TYPE.GITHUB} />
        </div>
        <h1>Hello, World</h1>
        <p>This is a test</p>
        <Button
          onClick={() => console.log('IT IS NOT')}
          variant={Button.VARIANT.PRIMARY}
          size={Button.SIZE.LARGE}
        >
          Or is it?
        </Button>
      </div>
    </>
  );
};

IndexPage.propTypes = {
  data: PropTypes.object,
};

export const pageQuery = graphql`
  query {
    site {
      layout {
        contentPadding
        maxWidth
      }
    }
  }
`;

export default IndexPage;
