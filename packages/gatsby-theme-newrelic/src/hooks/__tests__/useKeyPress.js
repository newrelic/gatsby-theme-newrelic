import useKeyPress from '../useKeyPress';
import { renderHook } from '@testing-library/react-hooks';
import { fireEvent } from '@testing-library/react';

test('calls handler when the key is pressed', () => {
  const handler = jest.fn();

  renderHook(() => useKeyPress('a', handler));

  fireEvent.keyDown(document, { key: 'a' });

  expect(handler).toHaveBeenCalledTimes(1);
});

test('handles cmd modifier key command', () => {
  const handler = jest.fn();

  renderHook(() => useKeyPress('cmd+s', handler));

  fireEvent.keyDown(document, { key: 's' });

  expect(handler).not.toHaveBeenCalled();

  fireEvent.keyDown(document, { key: 's', metaKey: true });

  expect(handler).toHaveBeenCalledTimes(1);
});

test('maps ctrl key when using cmd for windows support', () => {
  const handler = jest.fn();

  renderHook(() => useKeyPress('cmd+s', handler));

  fireEvent.keyDown(document, { key: 's', ctrlKey: true });

  expect(handler).toHaveBeenCalledTimes(1);
});

test('handles ctrl key', () => {
  const handler = jest.fn();

  renderHook(() => useKeyPress('ctrl+s', handler));

  fireEvent.keyDown(document, { key: 's', ctrlKey: true });

  expect(handler).toHaveBeenCalledTimes(1);
});

test('does not map cmd key if ctrl is specified', () => {
  const handler = jest.fn();

  renderHook(() => useKeyPress('ctrl+s', handler));

  fireEvent.keyDown(document, { key: 's', metaKey: true });

  expect(handler).not.toHaveBeenCalled();
});

test('handles shift key', () => {
  const handler = jest.fn();

  renderHook(() => useKeyPress('shift+s', handler));

  fireEvent.keyDown(document, { key: 's', shiftKey: true });

  expect(handler).toHaveBeenCalledTimes(1);
});

test('handles alt key', () => {
  const handler = jest.fn();

  renderHook(() => useKeyPress('alt+b', handler));

  fireEvent.keyDown(document, { key: 'b', altKey: true });

  expect(handler).toHaveBeenCalledTimes(1);
});

test('does not care about casing', () => {
  const handler = jest.fn();

  renderHook(() => useKeyPress('sHiFt+B', handler));

  fireEvent.keyDown(document, { key: 'b', shiftKey: true });

  expect(handler).toHaveBeenCalledTimes(1);
});

test('ignores whitespace', () => {
  const handler = jest.fn();

  renderHook(() => useKeyPress('ctrl  + C', handler));

  fireEvent.keyDown(document, { key: 'c', ctrlKey: true });

  expect(handler).toHaveBeenCalledTimes(1);
});
