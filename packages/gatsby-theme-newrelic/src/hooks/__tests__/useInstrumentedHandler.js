import useInstrumentedHandler from '../useInstrumentedHandler';
import { renderHook } from '@testing-library/react';
import { enableFetchMocks } from 'jest-fetch-mock';
enableFetchMocks();

const originalError = console.error;
const TESSEN_OBJECT = {
  name: 'click',
  category: 'CategoryName',
  nr_product: 'THEME',
  nr_subproduct: 'TTHEME',
  location: 'Public',
  loggedIn: true,
  customer_user_id: null,
  anonymousId: null,
  env: '',
};

const SEGMENT_OBJECT = {
  Segment: {
    integrations: {
      All: true,
    },
  },
};

global.newRelicRequestingServicesHeader = 'gatsby-theme-newrelic-demo';
global.Tessen = {
  track: jest.fn(),
};

afterEach(() => {
  console.error = originalError;
  global.Tessen.track.mockClear();
});

test('instruments tessen and calls original handler with all arguments', async () => {
  const originalHandler = jest.fn();
  const { result } = renderHook(() =>
    useInstrumentedHandler(originalHandler, {
      eventName: 'eventName',
      category: 'CategoryName',
      name: 'click',
    })
  );

  result.current(1, 2);

  await result.current.tessenResult;
  expect(originalHandler).toHaveBeenCalledTimes(1);
  expect(originalHandler).toHaveBeenCalledWith(1, 2);
  expect(global.Tessen.track).toHaveBeenCalledTimes(1);
  expect(global.Tessen.track).toHaveBeenCalledWith(
    'eventName',
    TESSEN_OBJECT,
    SEGMENT_OBJECT
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

  expect(global.Tessen.track).toHaveBeenCalledWith(
    'eventName',
    { ...TESSEN_OBJECT, darkMode: true },
    SEGMENT_OBJECT
  );
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

  expect(global.Tessen.track).toHaveBeenCalledWith(
    'eventName',
    { ...TESSEN_OBJECT, sum: 4 },
    SEGMENT_OBJECT
  );
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
