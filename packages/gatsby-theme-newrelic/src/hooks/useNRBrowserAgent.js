import { useMemo } from 'react';
import createNRBrowserAgent from '../utils/createNRBrowserAgent';

const useNRBrowserAgent = () => {
  const nrBrowserAgent = useMemo(() => createNRBrowserAgent(), []);
  return nrBrowserAgent;
};

export default useNRBrowserAgent;
