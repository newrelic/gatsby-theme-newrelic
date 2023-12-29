import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { useStaticQuery, graphql } from 'gatsby';

import TabsContext from '../Context';
import Bar from './Bar';
import BarItem from './BarItem';
import Pages from './Pages';
import Page from './Page';

const Tabs = ({ children, initialTab }) => {
  const [currentTab, setCurrentTab] = useState(initialTab);
  const [containerHeight, setContainerHeight] = useState(0);

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
    currentTab,
    mobileBreakpoint,
    setCurrentTab,
    updateHeight,
  };

  return (
    <TabsContext.Provider value={context}>
      <div>{children}</div>
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
