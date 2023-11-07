import React from 'react';
import Video from '../Video.mjs';
import { render } from '@testing-library/react';

test('renders with youtube url when passed youtube type', () => {
  const { container } = render(<Video id="7omo0qHxku8" type="youtube" />);
  const iframe = container.querySelector('iframe');
  expect(iframe.src.includes('youtube.com')).toBeTruthy();
});

test('renders with wistia url when passed wistia type', () => {
  const { container } = render(<Video id="inyshp3m7r" type="wistia" />);
  const iframe = container.querySelector('iframe');
  expect(iframe.src.includes('wistia.net')).toBeTruthy();
});
