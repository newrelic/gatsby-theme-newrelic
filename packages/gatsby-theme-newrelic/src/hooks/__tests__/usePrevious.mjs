import usePrevious from '../usePrevious.mjs';
import { act, renderHook } from '@testing-library/react';
import { useState } from 'react';

test('keeps previous value', () => {
  const { result } = renderHook(() => {
    const [num, setNum] = useState(0);
    const previousNum = usePrevious(num);
    return { setNum, previousNum };
  });

  expect(result.current.previousNum).toBe(null);

  act(() => {
    result.current.setNum(1);
  });
  expect(result.current.previousNum).toBe(0);

  act(() => {
    result.current.setNum(2);
  });
  expect(result.current.previousNum).toBe(1);
});

test('initializes with value if option is passed', () => {
  const { result } = renderHook(() => {
    const [num, setNum] = useState(0);
    const previousNum = usePrevious(num, { initializeWithValue: true });
    return { setNum, previousNum };
  });

  expect(result.current.previousNum).toBe(0);

  act(() => {
    result.current.setNum(1);
  });
  expect(result.current.previousNum).toBe(0);

  act(() => {
    result.current.setNum(2);
  });
  expect(result.current.previousNum).toBe(1);
});
