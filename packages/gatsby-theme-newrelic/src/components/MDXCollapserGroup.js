import React from 'react';
import { css } from '@emotion/core';
import CollapserGroup from './CollapserGroup';

const MDXCollapserGroup = (props) => (
  <CollapserGroup
    {...props}
    css={css`
      &:not(:last-child) {
        margin-bottom: var(--block-element-spacing);
      }
    `}
  />
);

export default MDXCollapserGroup;
