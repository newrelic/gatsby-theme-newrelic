import * as runtime from 'react/jsx-runtime';
import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import { evaluate } from '@mdx-js/mdx';
import { useMDXComponents } from '@mdx-js/react';
import MDX from '../MDX.mjs';

// testing this component in an MDX rendered context as it is intended to be used
const mdx = `<Side><p>I am child</p></Side>`;
const ContentAsMdx = (await evaluate(mdx, { ...runtime, useMDXComponents }))
  .default;

test(`renders a Side component with children`, () => {
  render(
    <MDX>
      <ContentAsMdx />
    </MDX>
  );

  expect(screen.getByText('I am child')).toBeVisible();
});
