import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { css } from '@emotion/react';
import useTabs from './useTabs';
import useInstrumentedHandler from '../../hooks/useInstrumentedHandler';

const BarItem = ({ className, index, children, id, disabled }) => {
  const { currentTabIndex, setCurrentTabIndex, stacked } = useTabs();
  const isSelected =
    index === currentTabIndex || (currentTabIndex === undefined && index === 0);

  const handleTabClick = useInstrumentedHandler(
    () => {
      !disabled && setCurrentTabIndex(index);
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
        border-top: var(--primary-background-color) solid 2px;
        border-bottom: #1dcad3 solid 2px;

        transition: 0.5s ease-in;
        transition-property: background;

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
          border-top-left-radius: 4px;
          border-top-right-radius: 4px;
          background: var(--secondary-background-color);

          border: #1dcad3 solid 2px;
          border-bottom: var(--secondary-background-color) solid 2px;

          .dark-mode & {
            border-bottom: var(--secondary-background-color) solid 2px;
          }
        }

        ${stacked &&
        css`
          border-bottom: none;
          border-left: var(--divider-color) solid 2px;
          white-space: normal;
          text-align: left;

          &.isSelected {
            color: var(--primary-text-color);
            border-bottom: none;
            border-left: var(--brand-button-primary-accent) solid 2px;

            .dark-mode & {
              border-bottom: none;
              border-left: var(--brand-button-primary-accent-hover) solid 2px;
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
};

export default BarItem;
