import React, { useState } from 'react';
import { css } from '@emotion/core';
import Button from './Button';
import Icon from './Icon';

const Banner = ({ children, color }) => {
  const [visible, updateVisible] = useState(true);

  if (!visible) return null;

  return (
    <div
      css={css`
        height: 90px;
        background-color: ${color || '--tertiary-background-color'};
        padding: 1rem;
      `}
    >
      <Button
        variant={Button.VARIANT.LINK}
        size={Button.SIZE.EXTRA_SMALL}
        onClick={() => updateVisible(false)}
        css={css`
          position: absolute;
          top: 0;
          right: 0;
        `}
      >
        <Icon size="0.875rem" name="x"></Icon>
      </Button>
      {children}
    </div>
  );
};

export default Banner;
