import { render } from '@testing-library/react';
import SelectInLine from '../SelectInLine.mjs';

test(`renders a select element with provided options`, () => {
  const { container } = render(
    <SelectInLine label="testing an inline select box" className="test-class">
      <option value="A">Value A</option>
      <option value="B">Value B</option>
      <option value="C">Value C</option>
    </SelectInLine>
  );

  expect(
    container.querySelectorAll('div.test-class > select > option').length
  ).toEqual(3);
});
