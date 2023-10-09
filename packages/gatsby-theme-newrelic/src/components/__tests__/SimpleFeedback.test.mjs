import { fireEvent, render } from '@testing-library/react';
import SimpleFeedback from '../SimpleFeedback.mjs';

global.Tessen = {
  track: jest.fn(),
};

const tessenObject = (feedback) => ({
  category: `${feedback}FeedbackClick`,
  nr_product: 'foo',
  nr_subproduct: 'foobar',
  location: 'Public',
  customer_user_id: null,
  anonymousId: null,
  env: '',
  path: '/',
});

const SEGMENT_OBJECT = {
  Segment: {
    integrations: {
      All: true,
    },
  },
};

test('Should display the feedback form, and click positive button', () => {
  const screen = render(<SimpleFeedback />);
  const buttons = screen.getAllByRole('button');
  const positiveButton = buttons[0];
  fireEvent.click(positiveButton);
  expect(global.Tessen.track).toHaveBeenCalledWith(
    'feedbackThumbClick',
    tessenObject('Positive'),
    SEGMENT_OBJECT
  );
});

test('Should display the feedback form, and click negative button', () => {
  const screen = render(<SimpleFeedback />);
  const buttons = screen.getAllByRole('button');
  const negativeButton = buttons[1];
  fireEvent.click(negativeButton);
  expect(global.Tessen.track).toHaveBeenLastCalledWith(
    'feedbackThumbClick',
    tessenObject('Negative'),
    SEGMENT_OBJECT
  );
});
