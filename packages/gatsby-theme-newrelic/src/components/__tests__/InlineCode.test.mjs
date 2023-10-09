import * as runtime from 'react/jsx-runtime';
import { evaluate } from '@mdx-js/mdx';
import { useMDXComponents } from '@mdx-js/react';
import { render } from '@testing-library/react';
import MDX from '../MDX.mjs';

const codeString = 'some_cool_placeholder.code';
// testing this component in an MDX rendered context as it is intended to be used
const mdx = `<InlineCode>${codeString}</InlineCode>`;
const ContentAsMdx = (await evaluate(mdx, { ...runtime, useMDXComponents }))
  .default;

test(`wraps children in 'code' tag`, () => {
  const { container } = render(
    <MDX>
      <ContentAsMdx />
    </MDX>
  );
  expect(container.querySelector('code').innerHTML).toBe(codeString);
});
