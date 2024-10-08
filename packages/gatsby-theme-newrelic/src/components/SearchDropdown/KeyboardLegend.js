import React from 'react';
import styled from '@emotion/styled';

import Icon from '../Icon';

const KeyboardLegend = () => (
  <LegendContainer>
    <div>
      <kbd>
        <Icon name="nr-arrow-go-to" />
      </kbd>
      to select
    </div>
    <div>
      <kbd>
        <Icon name="nr-arrow-up" />
      </kbd>
      <kbd>
        <Icon name="nr-arrow-down" />
      </kbd>
      to navigate
    </div>
    <div>
      <kbd>Esc</kbd>to close
    </div>
  </LegendContainer>
);

const LegendContainer = styled.div`
  align-items: center;
  border-top: 1px solid var(--search-dropdown-border);
  color: var(--secondary-text-color);
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  padding: 16px 0 0;

  & > div {
    align-items: center;
    display: flex;
  }

  & kbd {
    border: 1px solid currentColor;
    border-radius: 4px;
    display: inline-grid;
    line-height: 1.1;
    margin-right: 0.25rem;
    padding: 2px 4px;
    place-items: center;
  }

  @media (max-width: 760px) {
    display: none;
  }
`;

export default KeyboardLegend;
