import { createHistory, createMemorySource } from '@reach/router';

import useQueryParams from '../useQueryParams.mjs';
import { renderHookWithProviders } from '../../test-utils/renderHelpers.mjs';

test('parses query params correctly', () => {
  const history = createHistory(createMemorySource('/'));
  history.navigate(
    'https://example.org?testKey=testValue&anotherKey=anotherValue'
  );
  const { result } = renderHookWithProviders(useQueryParams, { history });

  const expected = { testKey: 'testValue', anotherKey: 'anotherValue' };
  expect(Object.fromEntries(result.current.queryParams.entries())).toEqual(
    expected
  );
});
