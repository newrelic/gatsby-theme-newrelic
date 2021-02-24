import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import MobileNavModal from './MobileNavModal';
import usePrevious from '../hooks/usePrevious';
import useScrollFreeze from '../hooks/useScrollFreeze';
import { useLocation } from '@reach/router';
import { useTransition } from 'react-spring';

const MobileNavigation = ({ isOpen, children, onClose }) => {
  useScrollFreeze(isOpen);

  const location = useLocation();
  const previousLocation = usePrevious(location);
  const hasChangedPage = location.pathname !== previousLocation?.pathname;

  const transitions = useTransition(isOpen, null, {
    config: { mass: 1, tension: 350, friction: 25, velocity: 10 },
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

  return transitions.map(
    ({ item, key, props }) =>
      item && (
        <MobileNavModal key={key} style={props} onClose={onClose}>
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
