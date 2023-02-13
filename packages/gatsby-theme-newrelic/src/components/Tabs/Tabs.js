import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { useStaticQuery, graphql } from 'gatsby';

import TabsContext from '../Context';
import Bar from './Bar';
import BarItem from './BarItem';
import Pages from './Pages';
import Page from './Page';

const Tabs = ({ children, initialTab, stacked }) => {
  const tabState = useState(initialTab);
  const {
    site: {
      layout: { mobileBreakpoint },
    },
  } = useStaticQuery(graphql`
    query BarQuery {
      site {
        layout {
          mobileBreakpoint
        }
      }
    }
  `);

  return (
    <TabsContext.Provider value={[tabState, stacked, mobileBreakpoint]}>
      <div
        css={css`
          ${stacked &&
          css`
            display: flex;
          `}
          @media screen and (max-width: ${mobileBreakpoint}) {
            display: block;
          }
        `}
      >
        {children}
      </div>
    </TabsContext.Provider>
  );
};

Tabs.propTypes = {
  children: PropTypes.node.isRequired,
  /**
   * this should be the `id` of the tab.
   */
  initialTab: PropTypes.string,
};

Tabs.Bar = Bar;
Tabs.BarItem = BarItem;
Tabs.Pages = Pages;
Tabs.Page = Page;

export default Tabs;
