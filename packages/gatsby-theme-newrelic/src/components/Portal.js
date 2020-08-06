import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

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

export default Portal;
