import useInstrumentedHandler from '../useInstrumentedHandler';
import { renderHook } from '@testing-library/react-hooks';

const originalError = console.error;

global.newrelic = {
  addPageAction: jest.fn(),
};

global.Tessen = {
  track: jest.fn(),
};

afterEach(() => {
  console.error = originalError;
  global.newrelic.addPageAction.mockClear();
  global.Tessen.track.mockClear();
});

test('instruments page action and calls original handler with all arguments', () => {
  const originalHandler = jest.fn();
  const { result } = renderHook(() =>
    useInstrumentedHandler(originalHandler, { actionName: 'click' })
  );

  result.current(1, 2);

  expect(originalHandler).toHaveBeenCalledTimes(1);
  expect(originalHandler).toHaveBeenCalledWith(1, 2);
  expect(global.newrelic.addPageAction).toHaveBeenCalledTimes(1);
  expect(global.newrelic.addPageAction).toHaveBeenCalledWith('click', {});
});

test('instruments tessen and calls original handler with all arguments', () => {
  const originalHandler = jest.fn();
  const { result } = renderHook(() =>
    useInstrumentedHandler(
      originalHandler,
      {
        tessenEventName: 'eventName',
        tessenCategoryName: 'CategoryName',
        name: 'click',
      },
      'tessen'
    )
  );

  result.current(1, 2);

  expect(originalHandler).toHaveBeenCalledTimes(1);
  expect(originalHandler).toHaveBeenCalledWith(1, 2);
  expect(global.Tessen.track).toHaveBeenCalledTimes(1);
  expect(global.Tessen.track).toHaveBeenCalledWith(
    'eventName',
    {
      name: 'click',
      category: 'CategoryName',
      nr_product: 'THEME',
      nr_subproduct: 'TTHEME',
      location: 'Public',
      customer_user_id: '',
    },
    {
      Segment: {
        integrations: {
          All: true,
        },
      },
    }
  );
});

test('attaches any additional fields in config as attributes', () => {
  const { result } = renderHook(() =>
    useInstrumentedHandler(jest.fn(), { actionName: 'click', darkMode: true })
  );

  result.current();

  expect(global.newrelic.addPageAction).toHaveBeenCalledWith('click', {
    darkMode: true,
  });
});

test('original return value is maintained', () => {
  const originalHandler = () => 'tacos';
  const { result } = renderHook(() =>
    useInstrumentedHandler(originalHandler, { actionName: 'click' })
  );

  const returnValue = result.current();

  expect(returnValue).toEqual('tacos');
});

test('successfully instruments call if original handler is not set', () => {
  const { result } = renderHook(() =>
    useInstrumentedHandler(null, { actionName: 'click' })
  );

  result.current('clicked!');

  expect(global.newrelic.addPageAction).toHaveBeenCalledWith('click', {});
});

test('allows config argument to be a function called with the handler arguments', () => {
  const { result } = renderHook(() =>
    useInstrumentedHandler(jest.fn(), (a, b) => ({
      actionName: 'add',
      sum: a + b,
    }))
  );

  result.current(2, 2);

  expect(global.newrelic.addPageAction).toHaveBeenCalledWith('add', { sum: 4 });
});

test('does not instrument the request if newrelic is not installed', () => {
  const originalNewRelic = global.newrelic;
  global.newrelic = null;

  const originalHandler = jest.fn();
  const { result } = renderHook(() =>
    useInstrumentedHandler(originalHandler, { actionName: 'not called' })
  );

  expect(() => result.current()).not.toThrow();
  expect(originalHandler).toHaveBeenCalled();

  global.newrelic = originalNewRelic;
});

test('warns if actionName is not set', () => {
  console.error = jest.fn();

  const { result } = renderHook(() =>
    useInstrumentedHandler(jest.fn(), { name: 'click' })
  );

  result.current();

  expect(console.error).toHaveBeenCalledWith(
    expect.stringContaining(
      'You are attempting to instrument a handler, but the `actionName` property is not set. This will result in a no-op.'
    )
  );
});

test('warns if tessenEventName is not set', () => {
  console.error = jest.fn();

  const { result } = renderHook(() =>
    useInstrumentedHandler(jest.fn(), { name: 'click' }, 'tessen')
  );

  result.current();

  expect(console.error).toHaveBeenCalledWith(
    expect.stringContaining(
      'You are attempting to instrument a handler, but the `tessenEventName` property is not set. This will result in a no-op.'
    )
  );
});

test('warns if tessenCategoryName is not set', () => {
  console.error = jest.fn();

  const { result } = renderHook(() =>
    useInstrumentedHandler(jest.fn(), { name: 'click' }, 'tessen')
  );

  result.current();

  expect(console.error).toHaveBeenCalledWith(
    expect.stringContaining(
      'You are attempting to instrument a handler, but the `tessenCategoryName` property is not set. This will result in a no-op.'
    )
  );
});

test('warns if Tessen attributes used but tessen agent is not specified', () => {
  console.error = jest.fn();

  const { result } = renderHook(() =>
    useInstrumentedHandler(jest.fn(), {
      tessenEventName: 'eventName',
      tessenCategoryName: 'CategoryName',
      name: 'click',
    })
  );

  result.current();

  expect(console.error).toHaveBeenCalledWith(
    expect.stringContaining(
      'You added Tessen attributes but did not specify `tessen` as the agent. This will result in a no-op Tessen call.'
    )
  );
});

test('does not warn if newrelic is not installed', () => {
  const originalNewRelic = global.newrelic;

  global.newrelic = null;
  console.error = jest.fn();

  const { result } = renderHook(() =>
    useInstrumentedHandler(jest.fn(), { name: 'click' })
  );

  result.current();

  expect(console.error).not.toHaveBeenCalled();

  global.newrelic = originalNewRelic;
});
