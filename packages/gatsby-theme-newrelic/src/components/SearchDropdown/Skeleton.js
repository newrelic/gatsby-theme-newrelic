import React from 'react';
import { css } from '@emotion/react';

import { range } from '../../utils/array';
import LoadingBox from '../Skeleton';

const Skeleton = () =>
  range(0, 5).map((n) => (
    <div
      css={css`
        margin-bottom: 1rem;
      `}
      key={n}
    >
      {/* breadcrumb */}
      <LoadingBox
        css={css`
          height: 0.75rem;
          margin-bottom: 6px;
          width: 66%;
        `}
      />
      {/* title */}
      <LoadingBox
        css={css`
          height: 1.125rem;
          margin-bottom: 6px;
          width: 80%;
        `}
      />
      {/* blurb */}
      <LoadingBox
        css={css`
          height: 1.875rem;
          margin-bottom: 16px;
          width: 90%;
        `}
      />
    </div>
  ));

export default Skeleton;
