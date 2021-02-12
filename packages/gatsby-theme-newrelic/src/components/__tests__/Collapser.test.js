import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import {
  createMemorySource,
  createHistory,
  LocationProvider,
} from '@reach/router';
import Collapser from '../Collapser';

let history = createHistory(window);

// for some types of tests you want a memory source
let source = createMemorySource('/index?collapsers=open');
let historyWithQueryParam = createHistory(source);

test('hides collapser content by default', () => {
  render(
    <LocationProvider history={history}>
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
    <LocationProvider history={history}>
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

test('opens collapser via query param', () => {
  render(
    <LocationProvider history={historyWithQueryParam}>
      <Collapser title="The title">The content inside the callout</Collapser>
    </LocationProvider>
  );

  expect(screen.getByText(/The content/)).toHaveAttribute(
    'aria-hidden',
    'false'
  );
});

test('opens the collapser by pressing the "s" key', () => {
  render(
    <LocationProvider history={history}>
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
    <LocationProvider history={history}>
      <Collapser title="The title">The content inside the callout</Collapser>
    </LocationProvider>
  );

  fireEvent.keyDown(document.body, { key: 'f' });

  expect(screen.getByText(/The content/)).toHaveAttribute(
    'aria-hidden',
    'false'
  );
});
