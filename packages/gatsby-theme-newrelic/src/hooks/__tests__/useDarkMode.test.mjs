import React from 'react';
import useDarkMode from '../../hooks/useDarkMode';
import { renderHook, act } from '@testing-library/react';

beforeEach(() => {
  localStorage.clear();
  localStorage.setItem.mockClear();
  localStorage.getItem.mockClear();
});

test('sets darkmode to false if no localstorage', () => {
  localStorage.getItem.mockReturnValue(null);
  const { result } = renderHook(() => useDarkMode());
  expect(result.current.value).toBeFalsy();
});

test('sets darkmode to true if no localstorage = true', () => {
  localStorage.getItem.mockReturnValue('true');
  const { result } = renderHook(() => useDarkMode());
  expect(result.current.value).toBeTruthy();
});

test('sets darkmode to false if no localstorage = false', () => {
  localStorage.getItem.mockReturnValue('false');
  const { result } = renderHook(() => useDarkMode());
  expect(result.value).toBeFalsy();
});

test('sets darkmode to true if localstorage = false but darkMode is enabled', () => {
  localStorage.getItem.mockReturnValue('false');
  const { result } = renderHook(() => useDarkMode());
  act(() => result.current.enable());
  expect(result.current.value).toBeTruthy();
});

test('sets darkmode to false if localstorage = true darkMode is disabled', () => {
  localStorage.getItem.mockReturnValue('true');
  const { result } = renderHook(() => useDarkMode());
  act(() => result.current.disable());
  expect(result.current.value).toBeFalsy();
});
