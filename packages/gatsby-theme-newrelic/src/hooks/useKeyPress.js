import { useEffect, useRef } from 'react';

const useKeyPress = (key, handler) => {
  const savedHandler = useRef();

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === key) {
        savedHandler.current(e);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [key]);
};

export default useKeyPress;
