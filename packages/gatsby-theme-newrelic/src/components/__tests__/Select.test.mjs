import { render } from '@testing-library/react';
import Select from '../Select.mjs';

test(`renders a select element with provided options`, () => {
  const { container } = render(
    <Select className="test-class" value="A" onChange={jest.fn()}>
      <option value="A">Value A</option>
      <option value="B">Value B</option>
      <option value="C">Value C</option>
    </Select>
  );
  expect(
    container.querySelectorAll('div.test-class > select > option').length
  ).toEqual(3);
});
