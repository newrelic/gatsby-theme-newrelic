import React from 'react';
import SearchModal from '../SearchModal';
import { renderWithProviders } from '../../test-utils/renderHelpers.mjs';
import {
  createMemorySource,
  createHistory,
  LocationProvider,
} from '@reach/router';

let source = createMemorySource('/?q=taco');
let historyWithQueryParam = createHistory(source);

test('renders search modal when query param exists', () => {
  const portalContainer = document.createElement('div');
  portalContainer.setAttribute('id', 'portal');
  document.body.append(portalContainer);

  const { getByRole } = renderWithProviders(
    <LocationProvider history={historyWithQueryParam}>
      <SearchModal isOpen={true} onClose={() => {}} />
    </LocationProvider>
  );
  expect(getByRole('textbox').value).toEqual('taco');
});
