import useInstrumentedHandler from '../useInstrumentedHandler';
import { renderHook } from '@testing-library/react-hooks';
import { enableFetchMocks } from 'jest-fetch-mock';
enableFetchMocks();

const originalError = console.error;

global.newRelicRequestingServicesHeader = 'gatsby-theme-newrelic-demo';
global.newrelic = {
  addPageAction: jest.fn(() => Promise.resolve),
};

afterEach(() => {
  console.error = originalError;
  window.newrelic.addPageAction.mockClear();
});

test('instruments nrBrowserAgent and calls original handler with all arguments', async () => {
  const originalHandler = jest.fn();
  const { result } = renderHook(() =>
    useInstrumentedHandler(originalHandler, {
      eventName: 'eventName',
      category: 'CategoryName',
      name: 'click',
    })
  );

  await result.current(1, 2);
  expect(originalHandler).toHaveBeenCalledTimes(1);
  expect(originalHandler).toHaveBeenCalledWith(1, 2);
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
