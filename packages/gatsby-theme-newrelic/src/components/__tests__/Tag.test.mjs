import React from 'react';
import Tag from '../Tag.mjs';
import { render } from '@testing-library/react';

test('renders tag', () => {
  const { getByText } = render(<Tag>Bamboo</Tag>);
  expect(getByText(/Bamboo/)).toBeInTheDocument();
});
