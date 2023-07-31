import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const root =
  typeof document === 'undefined' ? null : document.querySelector('#portal');

const Portal = ({ children, initializer }) => {
  useEffect(() => {
    if (root) {
      initializer?.(root);
    }
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
