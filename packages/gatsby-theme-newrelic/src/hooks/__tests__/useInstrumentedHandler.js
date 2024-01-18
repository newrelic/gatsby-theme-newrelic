import useInstrumentedHandler from '../useInstrumentedHandler';
import { renderHook } from '@testing-library/react-hooks';
import { enableFetchMocks } from 'jest-fetch-mock';
enableFetchMocks();

const originalError = console.error;
const EVENT_OBJECT = {
  name: 'click',
  category: 'CategoryName',
  loggedIn: true,
  customer_user_id: null,
  anonymousId: null,
  env: '',
};

global.newRelicRequestingServicesHeader = 'gatsby-theme-newrelic-demo';
global.NrBrowserAgent = {
  addPageAction: jest.fn(),
};

afterEach(() => {
  console.error = originalError;
  global.NrBrowserAgent.addPageAction.mockClear();
});

test.only('instruments nrBrowserAgent and calls original handler with all arguments', async () => {
  const originalHandler = jest.fn();
  const { waitFor, result } = renderHook(() =>
    useInstrumentedHandler(originalHandler, {
      eventName: 'eventName',
      category: 'CategoryName',
      name: 'click',
    })
  );
  result.current(1, 2);
  await waitFor;
  console.log(waitFor);
  // console.log(result.current.nrBrowserAgentResult);
  expect(global.NrBrowserAgent.addPageAction).toHaveBeenCalledTimes(1);
  expect(global.NrBrowserAgent.addPageAction).toHaveBeenCalledWith(
    'eventName',
    EVENT_OBJECT
  );
});

test('attaches any additional fields in config as attributes', async () => {
  const { result } = renderHook(() =>
    useInstrumentedHandler(jest.fn(), {
      eventName: 'eventName',
      category: 'CategoryName',
      name: 'click',
      darkMode: true,
    })
  );

  result.current();
  await result.current.tessenResult;

  expect(global.Tessen.track).toHaveBeenCalledWith('eventName', {
    ...EVENT_OBJECT,
    darkMode: true,
  });
});

test('allows config argument to be a function called with the handler arguments', async () => {
  const { result } = renderHook(() =>
    useInstrumentedHandler(jest.fn(), (a, b) => ({
      eventName: 'eventName',
      category: 'CategoryName',
      name: 'click',
      sum: a + b,
    }))
  );
  result.current(2, 2);
  await result.current.tessenResult;

  expect(global.Tessen.track).toHaveBeenCalledWith('eventName', {
    ...EVENT_OBJECT,
    sum: 4,
  });
});

test('original return value is maintained', () => {
  const originalHandler = () => 'tacos';
  const { result } = renderHook(() =>
    useInstrumentedHandler(originalHandler, {
      eventName: 'eventName',
      category: 'CategoryName',
      name: 'click',
      darkMode: true,
    })
  );

  const returnValue = result.current();

  expect(returnValue).toEqual('tacos');
});

test('warns if eventName is not set', () => {
  console.error = jest.fn();

  const { result } = renderHook(() =>
    useInstrumentedHandler(jest.fn(), {
      category: 'CategoryName',
      name: 'click',
    })
  );

  result.current();

  expect(console.error).toHaveBeenCalledWith(
    expect.stringContaining(
      'You are attempting to instrument a handler, but the `eventName` property is not set. This will result in a no-op.'
    )
  );
});

test('warns if category is not set', () => {
  console.error = jest.fn();

  const { result } = renderHook(() =>
    useInstrumentedHandler(jest.fn(), {
      eventName: 'eventName',
      name: 'click',
    })
  );

  result.current();

  expect(console.error).toHaveBeenCalledWith(
    expect.stringContaining(
      'You are attempting to instrument a handler, but the `category` property is not set. This will result in a no-op.'
    )
  );
});

test('warns if category is not in Title Case', () => {
  console.error = jest.fn();

  const { result } = renderHook(() =>
    useInstrumentedHandler(jest.fn(), {
      eventName: 'eventName',
      category: 'category name',
      name: 'click',
    })
  );

  result.current();

  expect(console.error).toHaveBeenCalledWith(
    expect.stringContaining(
      "You are attempting to instrument a handler, but the 'category' is not in TitleCase. This will result in a no-op."
    )
  );
});

test('warns if eventName is not in Camel Case', () => {
  console.error = jest.fn();

  const { result } = renderHook(() =>
    useInstrumentedHandler(jest.fn(), {
      eventName: 'Event_name',
      category: 'CategoryName',
      name: 'click',
    })
  );

  result.current();

  expect(console.error).toHaveBeenCalledWith(
    expect.stringContaining(
      "You are attempting to instrument a handler, but the 'eventName' property is not in camelCase. This will result in a no-op."
    )
  );
});

test('does not instrument the request if Tessen is not installed', () => {
  const originalTessen = global.Tessen;
  global.Tessen = null;
  const originalHandler = jest.fn();
  const { result } = renderHook(() =>
    useInstrumentedHandler(originalHandler, {
      eventName: 'Event_name',
      category: 'CategoryName',
      name: 'click',
    })
  );
  expect(() => result.current()).not.toThrow();
  expect(originalHandler).toHaveBeenCalled();
  global.Tessen = originalTessen;
});
