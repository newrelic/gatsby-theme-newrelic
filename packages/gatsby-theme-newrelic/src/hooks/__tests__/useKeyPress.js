import useKeyPress from '../useKeyPress';
import { renderHook } from '@testing-library/react-hooks';
import { fireEvent } from '@testing-library/react';

test('calls handler when the key is pressed', () => {
  const handler = jest.fn();

  renderHook(() => useKeyPress('a', handler));

  fireEvent.keyDown(document.body, { key: 'a' });

  expect(handler).toHaveBeenCalledTimes(1);
});

test('handles cmd modifier key command', () => {
  const handler = jest.fn();

  renderHook(() => useKeyPress('cmd+s', handler));

  fireEvent.keyDown(document.body, { key: 's' });

  expect(handler).not.toHaveBeenCalled();

  fireEvent.keyDown(document.body, { key: 's', metaKey: true });

  expect(handler).toHaveBeenCalledTimes(1);
});

test('maps ctrl key when using cmd for windows support', () => {
  const handler = jest.fn();

  renderHook(() => useKeyPress('cmd+s', handler));

  fireEvent.keyDown(document.body, { key: 's', ctrlKey: true });

  expect(handler).toHaveBeenCalledTimes(1);
});

test('handles ctrl key', () => {
  const handler = jest.fn();

  renderHook(() => useKeyPress('ctrl+s', handler));

  fireEvent.keyDown(document.body, { key: 's', ctrlKey: true });

  expect(handler).toHaveBeenCalledTimes(1);
});

test('does not map cmd key if ctrl is specified', () => {
  const handler = jest.fn();

  renderHook(() => useKeyPress('ctrl+s', handler));

  fireEvent.keyDown(document.body, { key: 's', metaKey: true });

  expect(handler).not.toHaveBeenCalled();
});

test('handles shift key', () => {
  const handler = jest.fn();

  renderHook(() => useKeyPress('shift+s', handler));

  fireEvent.keyDown(document.body, { key: 's', shiftKey: true });

  expect(handler).toHaveBeenCalledTimes(1);
});

test('handles alt key', () => {
  const handler = jest.fn();

  renderHook(() => useKeyPress('alt+b', handler));

  fireEvent.keyDown(document.body, { key: 'b', altKey: true });

  expect(handler).toHaveBeenCalledTimes(1);
});

test('ignores whitespace', () => {
  const handler = jest.fn();

  renderHook(() => useKeyPress('ctrl  + c', handler));

  fireEvent.keyDown(document.body, { key: 'c', ctrlKey: true });

  expect(handler).toHaveBeenCalledTimes(1);
});

test('allows multiple keys to be specified', () => {
  const handler = jest.fn();

  renderHook(() => useKeyPress(['a', 'cmd+b'], handler));

  fireEvent.keyDown(document.body, { key: 'a' });

  expect(handler).toHaveBeenCalledTimes(1);

  fireEvent.keyDown(document.body, { key: 'b', metaKey: true });

  expect(handler).toHaveBeenCalledTimes(2);

  handler.mockReset();

  fireEvent.keyDown(document.body, { key: 'b' });
  fireEvent.keyDown(document.body, { key: 'c' });

  expect(handler).not.toHaveBeenCalled();
});

test('by default, does not fire when typing in an input or textarea', () => {
  const handler = jest.fn();

  renderHook(() => useKeyPress('a', handler));

  const input = document.createElement('input');
  const textarea = document.createElement('textarea');
  document.body.appendChild(input);
  document.body.appendChild(textarea);

  fireEvent.keyDown(input, { key: 'a' });
  fireEvent.keyDown(textarea, { key: 'a' });

  expect(handler).not.toHaveBeenCalled();
});

test('allows handler to fire when not ignoring text input', () => {
  const handler = jest.fn();

  renderHook(() => useKeyPress('a', handler, { ignoreTextInput: false }));

  const input = document.createElement('input');
  const textarea = document.createElement('textarea');
  document.body.appendChild(input);
  document.body.appendChild(textarea);

  fireEvent.keyDown(input, { key: 'a' });

  expect(handler).toHaveBeenCalledTimes(1);

  fireEvent.keyDown(textarea, { key: 'a' });

  expect(handler).toHaveBeenCalledTimes(2);
});
