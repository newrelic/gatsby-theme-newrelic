import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { css } from '@emotion/react';
import useTabs from './useTabs';
import useInstrumentedHandler from '../../hooks/useInstrumentedHandler';

const BarItem = ({ className, index, children, id, disabled }) => {
  const { currentTabIndex, setCurrentTabIndex } = useTabs();
  const isSelected =
    index === currentTabIndex || (currentTabIndex === undefined && index === 0);

  const handleTabClick = useInstrumentedHandler(
    () => {
      !disabled && setCurrentTabIndex(index);
      // prettier-ignore
      history.pushState(null , null, `#${id}`);
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
        color: var(--primary-text-color);
        cursor: pointer;
        padding: 0.5em;
        text-align: left;
        transition: 500ms background ease-in;
        user-select: none;
        white-space: nowrap;

        &:hover {
          color: var(--primary-text-color);
        }

        &.isSelected {
          border-bottom: #0c74df solid 2px;
          font-weight: 600;
          z-index: 1;
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
