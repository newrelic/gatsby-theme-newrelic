import createPersistedState from 'use-persisted-state';
import generateUUID from '../utils/generateUUID';
import { STORAGE_KEYS } from '../utils/constants';

const useUserIdState = createPersistedState(STORAGE_KEYS.USER_ID);

const useUserId = () => {
  const [userId] = useUserIdState(generateUUID);

  return userId;
};

export default useUserId;
