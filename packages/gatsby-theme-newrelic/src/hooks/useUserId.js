import { useState, useEffect } from 'react';
import generateUUID from '../utils/generateUUID';
import { STORAGE_KEYS } from '../utils/constants';

const useLocalStorage = (key, defaultValue = null) => {
  const stored =
    typeof window !== 'undefined' && window.localStorage.getItem(key);
  const initial = stored ? JSON.parse(stored) : defaultValue;
  const [value, setValue] = useState(initial);

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

const useUserId = () => {
  const [userId, setValue] = useLocalStorage(STORAGE_KEYS.USER_ID);
  if (userId == null) {
    const uuid = generateUUID();
    setValue(uuid);
    return uuid;
  }
  return userId;
};

export default useUserId;
