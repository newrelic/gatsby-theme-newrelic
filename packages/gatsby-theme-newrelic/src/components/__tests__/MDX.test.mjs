import React from 'react';
import MDX from '../MDX.mjs';
import { renderWithProviders } from '../../test-utils/renderHelpers.mjs';
import { evaluate } from '@mdx-js/mdx';
import { useMDXComponents } from '@mdx-js/react';
import * as runtime from 'react/jsx-runtime';
import fs from 'fs';

const mdx = fs.readFileSync(
  'packages/gatsby-theme-newrelic/src/components/__tests__/sample.mdx'
);
const JsxMdx = (await evaluate(mdx, { ...runtime, useMDXComponents })).default;

test('renders mdx as html', () => {
  const { container } = renderWithProviders(
    <MDX>
      <JsxMdx />
    </MDX>
  );
  expect(container).toMatchSnapshot();
});
