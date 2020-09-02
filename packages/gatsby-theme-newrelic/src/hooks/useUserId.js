import createPersistedState from 'use-persisted-state';
import generateUUID from '../utils/generateUUID';

const useUserIdState = createPersistedState('gatsby-theme-newrelic:userId');

const useUserId = () => {
  const [userId] = useUserIdState(generateUUID);

  return userId;
};

export default useUserId;
