import { useCallback, useEffect, useRef } from 'react';
import warning from 'warning';
import useTessen from './useTessen';
import { CAMEL_CASE, TITLE_CASE } from '../utils/constants';
import { convertToCamelCase, convertToTitleCase } from '../utils/changeCase';

const useInstrumentedHandler = (handler, attributes) => {
  const savedHandler = useRef();
  const tessen = useTessen();

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);
  // console.log({ attributes });
  return useCallback(
    (...args) => {
      const { tessenEventName, tessenCategoryName, ...attrs } =
        typeof attributes === 'function' ? attributes(...args) : attributes;

      if (window.Tessen) {
        warning(
          tessenEventName,
          'You are attempting to instrument a handler, but the `tessenEventName` property is not set. This will result in a no-op.'
        );

        tessenEventName &&
          warning(
            CAMEL_CASE.test(tessenEventName),
            `You are attempting to instrument a handler, but the 'tessenEventName' property is not in camelCase. This will result in a no-op. Please change '${tessenEventName}' to something like '${convertToCamelCase(
              tessenEventName
            )}'.`
          );

        warning(
          tessenCategoryName,
          'You are attempting to instrument a handler, but the `tessenCategoryName` property is not set. This will result in a no-op.'
        );

        tessenCategoryName &&
          warning(
            TITLE_CASE.test(tessenCategoryName),
            `You are attempting to instrument a handler, but the 'tessenCategoryName' is not in TitleCase. This will result in a no-op. Please change '${tessenCategoryName}' to something like '${convertToTitleCase(
              tessenCategoryName
            )}'.`
          );

        tessenEventName &&
          tessenCategoryName &&
          tessen.track(tessenEventName, tessenCategoryName, attrs);
      }

      if (savedHandler.current) {
        return savedHandler.current(...args);
      }
    },
    [attributes, tessen]
  );
};

export default useInstrumentedHandler;
