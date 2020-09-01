import React from 'react';
import PropTypes from 'prop-types';
import { SplitFactory } from '@splitsoftware/splitio-react';
import useUserId from '../hooks/useUserId';

const SplitIOProvider = ({ children, config }) => {
  const userId = useUserId();
  const splitConfig = {
    ...config,
    core: { ...config.core, key: userId },
  };

  return <SplitFactory config={splitConfig}>{children}</SplitFactory>;
};

SplitIOProvider.propTypes = {
  children: PropTypes.node,
  config: PropTypes.object,
};

export default SplitIOProvider;
