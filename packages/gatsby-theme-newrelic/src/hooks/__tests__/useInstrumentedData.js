import useInstrumentedData from '../useInstrumentedData';
import { renderHook } from '@testing-library/react-hooks/pure';

const originalError = console.error;

global.newrelic = {
  addPageAction: jest.fn(),
};

afterEach(() => {
  console.error = originalError;
  global.newrelic.addPageAction.mockClear();
});

test('instruments data with newrelic', () => {
  renderHook(() => useInstrumentedData({ actionName: 'click' }));

  expect(global.newrelic.addPageAction).toHaveBeenCalledTimes(1);
  expect(global.newrelic.addPageAction).toHaveBeenCalledWith('click', {});
});

test('instruments additional fields as attributes', () => {
  renderHook(() =>
    useInstrumentedData({ actionName: 'click', location: '/page-1' })
  );

  expect(global.newrelic.addPageAction).toHaveBeenCalledTimes(1);
  expect(global.newrelic.addPageAction).toHaveBeenCalledWith('click', {
    location: '/page-1',
  });
});

test('only sends another page action when data has changed', () => {
  const { rerender } = renderHook(
    (data) => useInstrumentedData({ actionName: 'click', ...data }),
    {
      initialProps: {
        darkMode: true,
      },
    }
  );

  expect(global.newrelic.addPageAction).toHaveBeenCalledTimes(1);

  rerender({ darkMode: true });

  expect(global.newrelic.addPageAction).toHaveBeenCalledTimes(1);

  rerender({ darkMode: false });

  expect(global.newrelic.addPageAction).toHaveBeenCalledTimes(2);
  expect(global.newrelic.addPageAction).toHaveBeenLastCalledWith('click', {
    darkMode: false,
  });
});

test('allows the effect to be turned off', () => {
  renderHook(() =>
    useInstrumentedData(
      { actionName: 'click', location: '/page-1' },
      { enabled: false }
    )
  );

  expect(global.newrelic.addPageAction).not.toHaveBeenCalled();
});

test('handles toggling the effect on/off', () => {
  const { rerender } = renderHook(
    ({ enabled }) =>
      useInstrumentedData(
        { actionName: 'click', location: '/page-1' },
        { enabled }
      ),
    { initialProps: { enabled: false } }
  );

  expect(global.newrelic.addPageAction).not.toHaveBeenCalled();

  rerender({ enabled: true });

  expect(global.newrelic.addPageAction).toHaveBeenCalledTimes(1);

  rerender({ enabled: false });

  expect(global.newrelic.addPageAction).toHaveBeenCalledTimes(1);
});

test('does not instrument if newrelic is not installed', () => {
  const originalNewRelic = global.newrelic;
  global.newrelic = null;
  console.error = jest.fn();

  const { result } = renderHook(() =>
    useInstrumentedData({ actionName: 'click' })
  );

  expect(result.error).toBeUndefined();

  global.newrelic = originalNewRelic;
});

test('warns if actionName is not set', () => {
  console.error = jest.fn();

  renderHook(() => useInstrumentedData({ title: 'New Relic' }));

  expect(console.error).toHaveBeenLastCalledWith(
    expect.stringContaining(
      'useInstrumentedData: You are attempting to instrument data, but the `actionName` property is not set. This will result in a no-op.'
    )
  );
});

test('does not instrument if action name is not set', () => {
  console.error = jest.fn();

  renderHook(() => useInstrumentedData({ title: 'New Relic' }));

  expect(global.newrelic.addPageAction).not.toHaveBeenCalled();
});
