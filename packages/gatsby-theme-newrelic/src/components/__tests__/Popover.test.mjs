import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Popover from '../Popover/Popover.mjs';
import PopoverButton from '../Popover/PopoverButton.mjs';

const popoverText = 'hi! 🤠';
const TestPopover = (props) => (
  <Popover {...props}>
    <p>{popoverText}</p>
  </Popover>
);
const TestPopoverButton = () => (
  <PopoverButton Popover={TestPopover}>TEST BUTTON</PopoverButton>
);

beforeEach(() => {
  const portalContainer = document.createElement('div');
  portalContainer.setAttribute('id', 'portal');
  document.body.append(portalContainer);
});

test('Popover is not visible initially', async () => {
  render(<TestPopoverButton />);
  const popover = screen.queryByText(popoverText);
  await waitFor(() => {
    expect(popover).not.toBeInTheDocument();
  });
});

test('clicking PopoverButton shows Popover', async () => {
  const { container } = render(<TestPopoverButton />);
  const button = container.querySelector('button');
  const popover = screen.queryByText(popoverText);
  expect(popover).not.toBeInTheDocument();

  // Popover should show after clicking PopoverButton
  await userEvent.click(button);
  await waitFor(() => {
    const popover = screen.queryByText(popoverText);
    expect(popover).toBeInTheDocument();
  });
});

test('clicking off while Popover is showing hides Popover', async () => {
  const { container } = render(
    <div>
      <TestPopoverButton />
      <button id="other">some other button</button>
    </div>
  );
  const button = container.querySelector('button');
  const popover = screen.queryByText(popoverText);
  expect(popover).not.toBeInTheDocument();

  // Popover should show after clicking PopoverButton
  await userEvent.click(button);
  await waitFor(() => {
    const popover = screen.queryByText(popoverText);
    expect(popover).toBeInTheDocument();
  });

  // and Popover should hide after clicking elsewhere
  const otherButton = container.querySelector('button#other');
  await userEvent.click(otherButton);
  await waitFor(() => {
    const popover = screen.queryByText(popoverText);
    expect(popover).not.toBeInTheDocument();
  });
});
