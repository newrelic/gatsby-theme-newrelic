import useWarning from '../useWarning';
import { renderHook } from '@testing-library/react';

const originalConsoleError = console.error;

afterEach(() => {
  console.error = originalConsoleError;
});

test('calls the warning if the test is false', () => {
  console.error = jest.fn();

  renderHook(() => useWarning(false, 'The warning message'));

  expect(console.error).toHaveBeenCalledTimes(1);
  expect(console.error).toHaveBeenCalledWith(
    expect.stringContaining('The warning message')
  );
});

test('triggers the warning the first time the test is false', () => {
  console.error = jest.fn();

  const { rerender } = renderHook(
    ({ test }) => useWarning(test, 'The warning message'),
    {
      initialProps: { test: true },
    }
  );

  expect(console.error).not.toHaveBeenCalled();

  rerender({ test: true });

  expect(console.error).not.toHaveBeenCalled();

  rerender({ test: false });

  expect(console.error).toHaveBeenCalledWith(
    expect.stringContaining('The warning message')
  );
});

test('only triggers the warning once when configured to trigger once', () => {
  console.error = jest.fn();

  const { rerender } = renderHook(
    ({ test }) => useWarning(test, 'The warning message', { once: true }),
    {
      initialProps: { test: true },
    }
  );

  rerender({ test: false });

  expect(console.error).toHaveBeenCalledTimes(1);

  rerender({ test: true });
  rerender({ test: false });

  expect(console.error).toHaveBeenCalledTimes(1);
});

test('triggers the warning multiple times if once is disabled', () => {
  console.error = jest.fn();

  const { rerender } = renderHook(
    ({ test }) => useWarning(test, 'The warning message', { once: false }),
    {
      initialProps: { test: true },
    }
  );

  rerender({ test: false });

  expect(console.error).toHaveBeenCalledTimes(1);

  rerender({ test: true });
  rerender({ test: false });

  expect(console.error).toHaveBeenCalledTimes(2);
});
