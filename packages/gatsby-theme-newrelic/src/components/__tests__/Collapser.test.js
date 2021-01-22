import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Collapser from '../Collapser';

test('hides collapser content by default', () => {
  render(
    <Collapser title="The title">The content inside the callout</Collapser>
  );

  expect(screen.getByText(/The content/)).toHaveAttribute(
    'aria-hidden',
    'true'
  );
});

test('allows collapser to be open by default', () => {
  render(
    <Collapser defaultOpen title="The title">
      The content inside the callout
    </Collapser>
  );

  expect(screen.getByText(/The content/)).toHaveAttribute(
    'aria-hidden',
    'false'
  );
});

test('opens the collapser by pressing the "s" key', () => {
  render(
    <Collapser title="The title">The content inside the callout</Collapser>
  );

  fireEvent.keyDown(document, { key: 's' });

  expect(screen.getByText(/The content/)).toHaveAttribute(
    'aria-hidden',
    'false'
  );
});

test('opens the collapser by pressing the "f" key', () => {
  render(
    <Collapser title="The title">The content inside the callout</Collapser>
  );

  fireEvent.keyDown(document, { key: 'f' });

  expect(screen.getByText(/The content/)).toHaveAttribute(
    'aria-hidden',
    'false'
  );
});
