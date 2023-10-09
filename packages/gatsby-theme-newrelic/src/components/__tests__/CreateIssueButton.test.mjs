import React from 'react';
import CreateIssueButton from '../CreateIssueButton.mjs';
import { renderWithProviders } from '../../test-utils/renderHelpers.mjs';

test('renders issue button', () => {
  const { getByText } = renderWithProviders(<CreateIssueButton />);
  expect(getByText(/Create issue/)).toBeInTheDocument();
});
