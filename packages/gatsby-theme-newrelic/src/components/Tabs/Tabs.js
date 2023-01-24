import React, { useState } from 'react';
import PropTypes from 'prop-types';

import TabsContext from '../Context';

import Bar from './Bar';
import BarItem from './BarItem';
import Pages from './Pages';
import Page from './Page';

const Tabs = ({ children, initialTab }) => {
  const tabState = useState(initialTab);

  return (
    <TabsContext.Provider value={tabState}>{children}</TabsContext.Provider>
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
