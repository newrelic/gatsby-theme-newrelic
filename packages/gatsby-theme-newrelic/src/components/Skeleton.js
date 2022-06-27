import React from 'react';
import { css } from '@emotion/react';

const Skeleton = () => (
  <div
    css={css`
      width: 100px;
      height: 100px;
      animation: skeleton-loading 1s linear infinite alternate;
      @keyframes skeleton-loading {
        0% {
          background-color: hsl(200, 20%, 80%);
        }
        100% {
          background-color: hsl(200, 20%, 95%);
        }
      }
    `}
  />
);

export default Skeleton;
