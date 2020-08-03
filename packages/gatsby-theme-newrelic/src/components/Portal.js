import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

const Portal = ({ children }) => {
  const [root] = useState(() => document.createElement('div'));

  useEffect(() => {
    document.body.appendChild(root);

    return () => document.body.removeChild(root);
  }, [root]);

  return createPortal(children, root);
};

export default Portal;
