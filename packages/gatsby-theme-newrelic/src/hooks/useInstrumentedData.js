import { useEffect } from 'react';
import useDeepMemo from './useDeepMemo';
import useWarning from './useWarning';

const useInstrumentedData = (data, { enabled = true } = {}) => {
  const memoizedData = useDeepMemo(() => data, [data]);

  useWarning(
    memoizedData.actionName,
    'useInstrumentedData: You are attempting to instrument data, but the `actionName` property is not set. This will result in a no-op.',
    { once: false }
  );

  useEffect(() => {
    const { actionName, ...attributes } = memoizedData;

    if (actionName && enabled && window.newrelic) {
      window.newrelic.addPageAction(actionName, attributes);
    }
  }, [enabled, memoizedData]);
};

export default useInstrumentedData;
