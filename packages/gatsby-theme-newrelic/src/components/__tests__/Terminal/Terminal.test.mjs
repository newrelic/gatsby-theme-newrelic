import React from 'react';
import Terminal from '../../Terminal';
import { getByText, render } from '@testing-library/react';

test('renders a terminal', () => {
  const text = 'cd packages/gatsby-theme-newrelic';
  const { container } = render(<Terminal>{text}</Terminal>);
  const textNode = getByText(container, text);
  expect(container.querySelector('code')).toBeInTheDocument();
  expect(textNode).toBeTruthy();
});
