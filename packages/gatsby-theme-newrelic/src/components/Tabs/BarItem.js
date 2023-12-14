import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { css } from '@emotion/react';
import useTabs from './useTabs';
import useInstrumentedHandler from '../../hooks/useInstrumentedHandler';

const BarItem = ({
  className,
  index,
  children,
  id,
  disabled,
  onClick: onTabClick,
}) => {
  const {
    currentTab,
    previousTabId,
    setCurrentTab,
    setPreviousTabId,
    setTransitionDirection,
    stacked,
  } = useTabs();
  const isSelected =
    id === currentTab || (currentTab === undefined && index === 0);

  const handleTabClick = useInstrumentedHandler(
    () => {
      !disabled && setCurrentTab(id);
      onTabClick && onTabClick(id);
      setTransitionDirection(previousTabId > index ? 'left' : 'right');
      setPreviousTabId(index);
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
        border-bottom: var(--border-color) solid 1px;
        background: none;
        color: var(--primary-text-color);
        flex-grow: 1;
        text-align: center;
        padding: 0.5em;
        cursor: pointer;
        user-select: none;
        white-space: nowrap;

        &:hover {
          color: var(--primary-text-color);
        }

        &.isSelected {
          border: var(--brand-button-primary-accent) solid 1px;
          border-bottom: none;
          border-top-left-radius: 4px;
          border-top-right-radius: 4px;

          .dark-mode & {
            border-top: var(--brand-button-primary-accent-hover) solid 1px;
          }
        }

        ${stacked &&
        css`
          border-bottom: none;
          border-left: var(--divider-color) solid 1px;
          white-space: normal;
          text-align: left;

          &.isSelected {
            color: var(--primary-text-color);
            border-bottom: none;
            border-left: var(--brand-button-primary-accent) solid 1px;

            .dark-mode & {
              border-bottom: none;
              border-left: var(--brand-button-primary-accent-hover) solid 1px;
            }
          }
        `}
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
  onClick: PropTypes.func,
};

export default BarItem;
