import { useCallback, useEffect, useRef } from 'react';
import warning from 'warning';
import useTessen from './useTessen';
import { CAMEL_CASE, TITLE_CASE } from '../utils/constants';

const useInstrumentedHandler = (handler, attributes) => {
  const savedHandler = useRef();
  const tessen = useTessen();

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  const instrumentedHandler = (...args) => {
    const { eventName, category, ...attrs } =
      typeof attributes === 'function' ? attributes(...args) : attributes;

    if (window.Tessen) {
      warning(
        eventName,
        'You are attempting to instrument a handler, but the `eventName` property is not set. This will result in a no-op.'
      );

      eventName &&
        warning(
          CAMEL_CASE.test(eventName),
          `You are attempting to instrument a handler, but the 'eventName' property is not in camelCase. This will result in a no-op.`
        );

      warning(
        category,
        'You are attempting to instrument a handler, but the `category` property is not set. This will result in a no-op.'
      );

      category &&
        warning(
          TITLE_CASE.test(category),
          `You are attempting to instrument a handler, but the 'category' is not in TitleCase. This will result in a no-op.`
        );

      // exposes the Promise that `tessen.track` returns.
      // this is _not_ intended to be used in code.
      // this is purely for the test suite so we can wait for this
      // fn to finish and check if `window.Tessen.track` is called.
      instrumentedHandler.tessenResult =
        eventName &&
        category &&
        tessen.track({ eventName, category, ...attrs });
    }

    if (savedHandler.current) {
      return savedHandler.current(...args);
    }
  };

  return useCallback(instrumentedHandler, [
    attributes,
    instrumentedHandler,
    tessen,
  ]);
};

export default useInstrumentedHandler;
