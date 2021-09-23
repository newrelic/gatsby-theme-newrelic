import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import SimpleFeedback from '../SimpleFeedback';
import { renderWithTranslation } from '../../test-utils/renderHelpers';

jest.mock('gatsby', () => ({
  __esModule: true,
  graphql: () => {},
  useStaticQuery: () => ({
    allLocale: {
      nodes: [{ locale: 'en', isDefault: true }],
    },
    newRelicThemeConfig: {
      tessen: {
        product: 'foo',
        subproduct: 'foobar',
      },
    },
  }),
}));

describe('SimpleFeedback Component', () => {
  beforeEach(() => {
    window.Tessen = jest.fn();
    window.Tessen.track = jest.fn();
    jest.clearAllMocks();
  });

  it('should render with two feedback buttons', () => {
    renderWithTranslation(<SimpleFeedback />);

    expect(screen.getByText('Yes')).toBeInTheDocument();
    expect(screen.getByText('No')).toBeInTheDocument();
  });

  it('should display a message when a button is clicked', () => {
    const message = 'Thank you for your feedback!';

    renderWithTranslation(<SimpleFeedback />);

    expect(screen.queryByText(message)).toBeNull();
    fireEvent.click(screen.getAllByRole('button')[0]);
    expect(screen.queryByText(message)).toBeInTheDocument();
  });
});
