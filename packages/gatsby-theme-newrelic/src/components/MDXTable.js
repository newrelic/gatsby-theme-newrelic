import React from 'react';
import { css } from '@emotion/core';
import Table from './Table';

const MDXTable = (props) => (
  <Table
    {...props}
    css={css`
      margin-bottom: 2rem;
    `}
  />
);

export default MDXTable;
