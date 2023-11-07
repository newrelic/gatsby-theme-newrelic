import useHasMounted from '../useHasMounted';
import { renderHook } from '@testing-library/react';

test('sets hasMounted to true when rendered', () => {
  const { result } = renderHook(() => useHasMounted());

  expect(result.current).toBe(true);
});
