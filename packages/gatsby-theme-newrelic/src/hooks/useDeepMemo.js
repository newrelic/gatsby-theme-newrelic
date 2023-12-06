import { useRef } from 'react';
import { equal } from '@wry/equality';

/**
 * Memoize a result using deep equality. This hook has two advantages over
 * React.useMemo: it uses deep equality to compare memo keys, and it guarantees
 * that the memo function will only be called if the keys are unequal.
 * React.useMemo cannot be relied on to do this, since it is only a performance
 * optimization (see https://reactjs.org/docs/hooks-reference.html#usememo).
 *
 * Borrowed from apollo-client
 * https://github.com/apollographql/apollo-client/blob/3c56a1d7a696ed63b2d3681aab0c23b8ea0831db/src/react/hooks/utils/useDeepMemo.ts
 */
const useDeepMemo = (memoFn, key) => {
  const ref = useRef();

  if (!ref.current || !equal(key, ref.current.key)) {
    ref.current = { key, value: memoFn() };
  }

  return ref.current.value;
};

export default useDeepMemo;
