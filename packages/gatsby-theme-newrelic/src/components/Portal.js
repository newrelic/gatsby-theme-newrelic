import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

// this used to just be a constant, but it failed to render correctly
// in tests. using a function means it will try for the root again,
// so tests using a `Portal` will render correctly.
const root = () =>
  typeof document === 'undefined' ? null : document.querySelector('#portal');

const Portal = ({ children, initializer }) => {
  useEffect(() => {
    if (root()) {
      initializer?.(root());
    }
  }, [initializer, root]);

  return root() ? createPortal(children, root()) : null;
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
