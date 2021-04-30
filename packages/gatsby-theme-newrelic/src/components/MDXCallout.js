import React from 'react';
import { css } from '@emotion/react';
import Callout from './Callout';

const MDXCallout = (props) => (
  <Callout
    {...props}
    css={css`
      &:not(:last-child) {
        margin-bottom: var(--block-element-spacing);
      }
    `}
  />
);

export default MDXCallout;
