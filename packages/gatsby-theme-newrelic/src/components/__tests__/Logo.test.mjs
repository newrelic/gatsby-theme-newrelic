import { render } from '@testing-library/react';
import Logo from '../Logo.mjs';

test(`renders an SVG`, () => {
  const { container } = render(<Logo />);

  expect(container.querySelector('svg')).toBeVisible();
});
