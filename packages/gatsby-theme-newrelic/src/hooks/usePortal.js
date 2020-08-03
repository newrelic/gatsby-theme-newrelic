import { useEffect } from 'react';

const usePortal = (isOpen, onOpen, onReset) =>
  useEffect(() => {
    if (isOpen) onOpen();
    return onReset;
  }, [isOpen, onOpen, onReset]);

export default usePortal;
