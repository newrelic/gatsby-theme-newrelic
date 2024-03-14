import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { css } from '@emotion/react';
import { navigate } from '@reach/router';
import useTabs from './useTabs';
import useInstrumentedHandler from '../../hooks/useInstrumentedHandler';

const BarItem = ({ className, index, children, id, disabled }) => {
  const { currentTabIndex, setCurrentTabIndex } = useTabs();
  const isSelected =
    index === currentTabIndex || (currentTabIndex === undefined && index === 0);

  const handleTabClick = useInstrumentedHandler(
    () => {
      !disabled && setCurrentTabIndex(index);
      navigate(`#${id}`);
    },
    {
      eventName: 'tabClick',
      category: 'Tabs',
      id,
    }
  );

  return (
    <button
      role="tab"
      aria-controls={id}
      type="button"
      onClick={handleTabClick}
      css={css`
        border: none;
        background: none;
        color: var(--primary-text-color);
        cursor: pointer;
        font-weight: bold;
        padding: 0.5em 0.5em 0.5em 0.5em;
        transition: 500ms background ease-in;
        user-select: none;
        white-space: nowrap;

        &:hover {
          color: var(--primary-text-color);
        }

        &.isSelected {
          border-top-left-radius: 4px;
          border-top-right-radius: 4px;
          border-bottom: var(--brand-button-primary-accent) solid 1.5px;
        }
      `}
      className={cx(
        { [`${className}`]: className },
        { isSelected: isSelected }
      )}
    >
      {children}
    </button>
  );
};

BarItem.propTypes = {
  index: PropTypes.number,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

export default BarItem;
