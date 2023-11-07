import { render } from '@testing-library/react';
import Table from '../Table.mjs';

test(`renders an HTML table element`, () => {
  // not rendering this one in MDX because it seems to only be used in .js pages
  // tables in MDX files are rendering as plain unstyled table tags
  const { container } = render(
    <Table>
      <thead>
        <tr>
          <td>Stinky</td>
          <td>Smelly</td>
          <td>Grouchy</td>
          <td>Hungry</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>"Fili"</td>
          <td>"Kili</td>
          <td>"Dwalin"</td>
          <td>"Balin"</td>
        </tr>
        <tr>
          <td>"Oin"</td>
          <td>"Gloin"</td>
          <td>"Dori"</td>
          <td>"Nori"</td>
        </tr>
        <tr>
          <td>"Ori"</td>
          <td>"Bifur"</td>
          <td>"Bofur"</td>
          <td>"Bombur</td>
        </tr>
      </tbody>
    </Table>
  );
  expect(container.querySelectorAll('thead > tr > td').length).toEqual(4);
  expect(container.querySelectorAll('tbody > tr > td').length).toEqual(12);
});
