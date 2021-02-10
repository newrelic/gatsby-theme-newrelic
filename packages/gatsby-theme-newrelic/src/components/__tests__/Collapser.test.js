import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { LocationProvider } from '@reach/router';
import Collapser from '../Collapser';

test('hides collapser content by default', () => {
  render(
    <LocationProvider>
      <Collapser title="The title">The content inside the callout</Collapser>
    </LocationProvider>
  );

  expect(screen.getByText(/The content/)).toHaveAttribute(
    'aria-hidden',
    'true'
  );
});

test('allows collapser to be open by default', () => {
  render(
    <LocationProvider>
      <Collapser defaultOpen title="The title">
        The content inside the callout
      </Collapser>
    </LocationProvider>
  );

  expect(screen.getByText(/The content/)).toHaveAttribute(
    'aria-hidden',
    'false'
  );
});

test('opens the collapser by pressing the "s" key', () => {
  render(
    <LocationProvider>
      <Collapser title="The title">The content inside the callout</Collapser>
    </LocationProvider>
  );

  fireEvent.keyDown(document.body, { key: 's' });

  expect(screen.getByText(/The content/)).toHaveAttribute(
    'aria-hidden',
    'false'
  );
});

test('opens the collapser by pressing the "f" key', () => {
  render(
    <LocationProvider>
      <Collapser title="The title">The content inside the callout</Collapser>
    </LocationProvider>
  );

  fireEvent.keyDown(document.body, { key: 'f' });

  expect(screen.getByText(/The content/)).toHaveAttribute(
    'aria-hidden',
    'false'
  );
});
