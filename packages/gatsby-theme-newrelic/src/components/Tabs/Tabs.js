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
  const [currentTabIndex, setCurrentTabIndex] = useState(initialTab);
  const [previousTabIndex, setPreviousTabIndex] = useState();
  const transitionDirection =
    previousTabIndex > currentTabIndex ? 'right' : 'left';
  const [containerHeight, setContainerHeight] = useState(0);

  const setTab = (tab) => {
    setPreviousTabIndex(currentTabIndex);
    setCurrentTabIndex(tab);
  };

  const updateHeight = (pageHeight) => {
    if (pageHeight > containerHeight) {
      const maxHeight = Math.min(pageHeight, 500);
      setContainerHeight(maxHeight);
    }
  };

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

  const context = {
    containerHeight,
    currentTabIndex,
    previousTabIndex,
    transitionDirection,
    mobileBreakpoint,
    setCurrentTabIndex: setTab,
    setPreviousTabIndex,
    stacked,
    updateHeight,
  };

  return (
    <TabsContext.Provider value={context}>
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
  stacked: PropTypes.bool,
};

Tabs.Bar = Bar;
Tabs.BarItem = BarItem;
Tabs.Pages = Pages;
Tabs.Page = Page;

export default Tabs;
