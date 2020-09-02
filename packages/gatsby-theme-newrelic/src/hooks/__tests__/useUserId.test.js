import useUserId from '../useUserId';
import { renderHook } from '@testing-library/react-hooks';
import { STORAGE_KEYS } from '../../utils/constants';

beforeEach(() => {
  localStorage.clear();
  localStorage.setItem.mockClear();
  localStorage.getItem.mockClear();
});

test('generates a user ID if the user ID is not in local storage', () => {
  localStorage.getItem.mockReturnValue(null);

  const { result } = renderHook(() => useUserId());

  expect(result.current).not.toBeNull();
});

test('sets the generated user ID in local storage for persistence', () => {
  localStorage.getItem.mockReturnValue(null);

  const { result } = renderHook(() => useUserId());

  expect(localStorage.setItem).toHaveBeenCalledTimes(1);
  expect(localStorage.setItem).toHaveBeenLastCalledWith(
    STORAGE_KEYS.USER_ID,
    JSON.stringify(result.current)
  );
});

test('returns the user ID from local storage if present', () => {
  const userId = 'user-abcde';
  localStorage.getItem.mockReturnValue(JSON.stringify(userId));

  const { result } = renderHook(() => useUserId());

  expect(result.current).toBe(userId);
});
