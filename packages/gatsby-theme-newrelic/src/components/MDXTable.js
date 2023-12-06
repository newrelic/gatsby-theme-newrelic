import React from 'react';
import { css } from '@emotion/react';
import Table from './Table';

const MDXTable = (props) => (
  <Table
    {...props}
    css={css`
      &:not(:last-child) {
        margin-bottom: var(--block-element-spacing);
      }
    `}
  />
);

export default MDXTable;
