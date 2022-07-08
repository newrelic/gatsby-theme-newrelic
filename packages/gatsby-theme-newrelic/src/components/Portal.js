import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const Portal = ({ children }) => {
  const [root] = useState(() =>
    typeof document === 'undefined' ? null : document.createElement('div')
  );

  useEffect(() => {
    document.body.appendChild(root);

    return () => document.body.removeChild(root);
  }, [root]);

  return root ? createPortal(children, root) : null;
};

Portal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Portal;
