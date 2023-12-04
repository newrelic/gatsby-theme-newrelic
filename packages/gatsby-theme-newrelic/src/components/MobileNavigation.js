import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import MobileNavModal from './MobileNavModal';
import usePrevious from '../hooks/usePrevious';
import useScrollFreeze from '../hooks/useScrollFreeze';
import { useLocation } from '@reach/router';
import { useTransition, config } from 'react-spring';

const MobileNavigation = ({ isOpen, children, onClose }) => {
  useScrollFreeze(isOpen);

  const location = useLocation();
  const previousLocation = usePrevious(location);
  const hasChangedPage = location.pathname !== previousLocation?.pathname;

  const transitions = useTransition(isOpen, {
    config: config.default,
    from: {
      position: 'fixed',
      opacity: 0,
      transform: 'scale(0.92)',
    },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0.92)' },
  });

  useEffect(() => {
    if (hasChangedPage) {
      onClose();
    }
  }, [hasChangedPage, onClose]);

  return transitions(
    (style, item) =>
      item && (
        <MobileNavModal style={style} onClose={onClose}>
          {children}
        </MobileNavModal>
      )
  );
};

MobileNavigation.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default MobileNavigation;
