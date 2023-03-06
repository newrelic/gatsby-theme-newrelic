import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const Portal = ({ children, initializer }) => {
  const [root] = useState(() =>
    typeof document === 'undefined' ? null : document.createElement('div')
  );

  useEffect(() => {
    if (root) {
      initializer?.(root);
    }
    document.body.appendChild(root);

    return () => document.body.removeChild(root);
  }, [initializer, root]);

  return root ? createPortal(children, root) : null;
};

Portal.propTypes = {
  children: PropTypes.node.isRequired,
  /**
   * Called with the `root` element of the portal.
   * This can be used to set any custom attributes on the portal element.
   * The return value isn't used, it's expected that the function provided
   * will mutate the element.
   */
  initializer: PropTypes.func,
};

export default Portal;
