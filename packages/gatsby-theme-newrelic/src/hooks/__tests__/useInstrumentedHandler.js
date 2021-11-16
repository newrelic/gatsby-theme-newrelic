import useInstrumentedHandler from '../useInstrumentedHandler';
import { renderHook } from '@testing-library/react-hooks';

const originalError = console.error;
const TESSEN_OBJECT = {
  name: 'click',
  category: 'CategoryName',
  nr_product: 'THEME',
  nr_subproduct: 'TTHEME',
  location: 'Public',
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

global.Tessen = {
  track: jest.fn(),
};

afterEach(() => {
  console.error = originalError;
  global.Tessen.track.mockClear();
});

test('instruments tessen and calls original handler with all arguments', () => {
  const originalHandler = jest.fn();
  const { result } = renderHook(() =>
    useInstrumentedHandler(originalHandler, {
      tessenEventName: 'eventName',
      tessenCategoryName: 'CategoryName',
      name: 'click',
    })
  );

  result.current(1, 2);

  expect(originalHandler).toHaveBeenCalledTimes(1);
  expect(originalHandler).toHaveBeenCalledWith(1, 2);
  expect(global.Tessen.track).toHaveBeenCalledTimes(1);
  expect(global.Tessen.track).toHaveBeenCalledWith(
    'eventName',
    TESSEN_OBJECT,
    SEGMENT_OBJECT
  );
});

test('attaches any additional fields in config as attributes', () => {
  const { result } = renderHook(() =>
    useInstrumentedHandler(jest.fn(), {
      tessenEventName: 'eventName',
      tessenCategoryName: 'CategoryName',
      name: 'click',
      darkMode: true,
    })
  );

  result.current();

  expect(global.Tessen.track).toHaveBeenCalledWith(
    'eventName',
    { ...TESSEN_OBJECT, darkMode: true },
    SEGMENT_OBJECT
  );
});

test('allows config argument to be a function called with the handler arguments', () => {
  const { result } = renderHook(() =>
    useInstrumentedHandler(jest.fn(), (a, b) => ({
      tessenEventName: 'eventName',
      tessenCategoryName: 'CategoryName',
      name: 'click',
      sum: a + b,
    }))
  );
  result.current(2, 2);
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
      tessenEventName: 'eventName',
      tessenCategoryName: 'CategoryName',
      name: 'click',
      darkMode: true,
    })
  );

  const returnValue = result.current();

  expect(returnValue).toEqual('tacos');
});

test('warns if tessenEventName is not set', () => {
  console.error = jest.fn();

  const { result } = renderHook(() =>
    useInstrumentedHandler(jest.fn(), {
      tessenCategoryName: 'CategoryName',
      name: 'click',
    })
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
    useInstrumentedHandler(jest.fn(), {
      tessenEventName: 'eventName',
      name: 'click',
    })
  );

  result.current();

  expect(console.error).toHaveBeenCalledWith(
    expect.stringContaining(
      'You are attempting to instrument a handler, but the `tessenCategoryName` property is not set. This will result in a no-op.'
    )
  );
});

test('warns if tessenCategoryName is not in Title Case', () => {
  console.error = jest.fn();

  const { result } = renderHook(() =>
    useInstrumentedHandler(jest.fn(), {
      tessenEventName: 'eventName',
      tessenCategoryName: 'category name',
      name: 'click',
    })
  );

  result.current();

  expect(console.error).toHaveBeenCalledWith(
    expect.stringContaining(
      "You are attempting to instrument a handler, but the 'tessenCategoryName' is not in TitleCase. This will result in a no-op. Please change 'category name' to something like 'CategoryName'."
    )
  );
});

test('warns if tessenEventName is not in Camel Case', () => {
  console.error = jest.fn();

  const { result } = renderHook(() =>
    useInstrumentedHandler(jest.fn(), {
      tessenEventName: 'Event_name',
      tessenCategoryName: 'CategoryName',
      name: 'click',
    })
  );

  result.current();

  expect(console.error).toHaveBeenCalledWith(
    expect.stringContaining(
      "You are attempting to instrument a handler, but the 'tessenEventName' property is not in camelCase. This will result in a no-op. Please change 'Event_name' to something like 'eventName'."
    )
  );
});

test('does not instrument the request if Tessen is not installed', () => {
  const originalTessen = global.Tessen;
  global.Tessen = null;
  const originalHandler = jest.fn();
  const { result } = renderHook(() =>
    useInstrumentedHandler(originalHandler, {
      tessenEventName: 'Event_name',
      tessenCategoryName: 'CategoryName',
      name: 'click',
    })
  );
  expect(() => result.current()).not.toThrow();
  expect(originalHandler).toHaveBeenCalled();
  global.Tessen = originalTessen;
});