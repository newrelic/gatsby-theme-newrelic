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
        background: none;
        border: none;
        border-bottom: #afe2e3 solid 1px;
        border-top: var(--primary-background-color) solid 1px;
        color: var(--primary-text-color);
        cursor: pointer;
        flex-grow: 1;
        font-weight: bold;
        padding: 0.75em 0.5em 0.75em 1em;
        text-align: left;
        transition: 500ms background ease-in;
        user-select: none;
        white-space: nowrap;

        &:hover {
          color: var(--primary-text-color);
        }

        &.isSelected {
          border-top-left-radius: 4px;
          border-top-right-radius: 4px;
          background: var(--secondary-background-color);

          border: var(--border-color) solid 1px;
          border: #afe2e3 solid 1px;
          border-bottom: var(--secondary-background-color) solid 1px;

          .dark-mode & {
            border-bottom: var(--secondary-background-color) solid 1px;
          }
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
