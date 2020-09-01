import { useState, useEffect } from 'react';
import useEventListener from '@use-it/event-listener';
import generateUUID from '../utils/generateUUID';

const LOCAL_STORAGE_KEY = 'gatsby-theme-newrelic--userID';

const storage = {
  get(key, defaultValue) {
    const value = global.localStorage.getItem(key);

    return value === null ? defaultValue : value;
  },
  set(key, value) {
    global.localStorage.setItem(key, value);
  },
};

const useUserId = () => {
  const [state, setState] = useState(() =>
    storage.get(LOCAL_STORAGE_KEY, generateUUID())
  );

  useEventListener('storage', ({ key, newValue }) => {
    if (key === LOCAL_STORAGE_KEY && state !== newValue) {
      setState(newValue);
    }
  });

  useEffect(() => {
    storage.set(LOCAL_STORAGE_KEY, state);
  }, [state]);

  return state;
};

export default useUserId;
