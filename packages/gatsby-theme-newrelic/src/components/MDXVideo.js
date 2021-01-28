import React from 'react';
import { css } from '@emotion/core';
import Video from './Video';

const MDXVideo = (props) => (
  <Video
    {...props}
    css={css`
      &:not(:last-child) {
        margin-bottom: var(--block-element-spacing);
      }
    `}
  />
);

export default MDXVideo;
