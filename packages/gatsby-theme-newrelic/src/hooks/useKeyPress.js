import { useEffect, useRef } from 'react';
import useDeepMemo from './useDeepMemo';

const normalizeInput = (keys) => {
  const [modifier, k] = keys.toLowerCase().split(/\s*\+\s*/);

  return k == null ? [null, modifier] : [modifier, k];
};

const matchesModifierKey = (modifier, event) => {
  switch (modifier) {
    case null:
      return true;
    case 'cmd':
      return event.metaKey || event.ctrlKey;
    case 'ctrl':
      return event.ctrlKey;
    case 'shift':
      return event.shiftKey;
    case 'alt':
      return event.altKey;
    default:
      return false;
  }
};

const useKeyPress = (keys, handler) => {
  const savedHandler = useRef();
  const [modifier, key] = useDeepMemo(() => normalizeInput(keys), [keys]);

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === key && matchesModifierKey(modifier, e)) {
        savedHandler.current(e);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [modifier, key]);
};

export default useKeyPress;
