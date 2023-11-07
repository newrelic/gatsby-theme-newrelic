import React from 'react';
import Walkthrough from '../Walkthrough';
import { render } from '@testing-library/react';

test('renders tab pages', () => {
  const { getByText } = render(
    <Walkthrough>
      <Walkthrough.Step title="The first step" id="step1">
        Get yourself a taco
      </Walkthrough.Step>
      <Walkthrough.Step title="The next step" id="step2" active>
        Eat the taco
      </Walkthrough.Step>
      <Walkthrough.Step title="The last step" id="step3">
        Finished
      </Walkthrough.Step>
    </Walkthrough>
  );
  expect(getByText(/Get yourself a taco/)).toBeInTheDocument();
  expect(getByText(/Eat the taco/)).toBeInTheDocument();
  expect(getByText(/Finished/)).toBeInTheDocument();
});
