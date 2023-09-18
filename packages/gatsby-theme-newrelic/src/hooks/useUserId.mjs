import { useLocalStorageState } from 'use-local-storage-state';
import generateUUID from '../utils/generateUUID';
import { STORAGE_KEYS } from '../utils/constants';

const useUserId = () => {
  const [userId, setValue] = useLocalStorageState(STORAGE_KEYS.USER_ID);
  if (userId == null) {
    const uuid = generateUUID();
    setValue(uuid);
    return uuid;
  }
  return userId;
};

export default useUserId;
