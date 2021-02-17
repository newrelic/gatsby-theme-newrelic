import { useEffect } from 'react';

const useScrollFreeze = (isFrozen) => {
  useEffect(() => {
    if (!isFrozen) {
      return;
    }

    const overflow = document.body.style.overflow;

    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = overflow;
    };
  }, [isFrozen]);
};

export default useScrollFreeze;
