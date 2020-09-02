import { useState, useEffect } from 'react';
import useEventListener from '@use-it/event-listener';
import generateUUID from '../utils/generateUUID';
import storage from '../utils/storage';

const STORAGE_KEY = 'gatsby-theme-newrelic--userID';

const useUserId = () => {
  const [state, setState] = useState(() =>
    storage.get(STORAGE_KEY, generateUUID())
  );

  useEventListener('storage', ({ key, newValue }) => {
    if (key === STORAGE_KEY && state !== newValue) {
      setState(newValue);
    }
  });

  useEffect(() => {
    storage.set(STORAGE_KEY, state);
  }, [state]);

  return state;
};

export default useUserId;
