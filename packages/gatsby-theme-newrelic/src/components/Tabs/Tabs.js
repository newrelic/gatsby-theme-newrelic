import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { useLocation } from '@reach/router';

import TabsContext from '../Context';
import Bar from './Bar';
import BarItem from './BarItem';
import Pages from './Pages';
import Page from './Page';

const Tabs = ({ children, initialTab }) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(initialTab);
  const [previousTabIndex, setPreviousTabIndex] = useState(initialTab);
  const tabsContainer = useRef(null);
  let transitionDirection = 'none';

  if (previousTabIndex !== currentTabIndex) {
    transitionDirection = previousTabIndex > currentTabIndex ? 'right' : 'left';
  }
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

  const location = useLocation();

  // this needs to run in a useEffect since the hash
  // isn't available on the server during SSG.
  // to put it another way, in order to have this work with SSG
  // we'd hypothetically need to render a separate HTML file
  // for every single tab id on the page.
  // i don't think we can do this with Gatsby.
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash !== '') {
      const [_tabBar, tabPages] = children;
      // Tabs should always look like this:
      // ```
      // <Tabs>
      //   <Tabs.Bar>...</Tabs.Bar>
      //   <Tabs.Pages>...</Tabs.Pages>
      // </Tabs>
      // ```
      // if not, something is wrong and we'll only break the page
      // by trying further.
      if (tabPages.type === Pages) {
        const pages = tabPages.props.children;
        const index = pages.findIndex((page) => page.props.id === hash);
        if (index !== -1) {
          // this is so the animation doesn't play on page load
          // if the first tab is selected.
          if (index !== 0) {
            setTab(index);
          }
          const y =
            tabsContainer.current.getBoundingClientRect().top +
            window.scrollY -
            // header height
            72;

          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }
    }
  }, []);

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
    updateHeight,
  };

  return (
    <TabsContext.Provider value={context}>
      <div ref={tabsContainer}>{children}</div>
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
