import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import useTabs from './useTabs';
import Select from '../Select';

/**
 * `TabBar`s and `TabItem`s can be rendered under the hood with
 * MDXCreateElement, which can potentially be nested multiple times.
 * Trying to render `TabItem`s from MDX directly will render `[object Object]`.
 * This function returns the deepest descendent element,
 * which in the case of `TabItem`s is a string.
 * It expects every element in the chain to have one child, otherwise
 * it returns null since it wouldn't know which child to continue from.
 */
const getDeepestChild = (child) => {
  if (typeof child !== 'object') return child;

  try {
    React.Children.only(child);
  } catch (err) {
    return null;
  }

  if (!child?.props?.children) {
    return child;
  }

  const deeperChild = child.props.children;
  if (deeperChild.props) {
    return getDeepestChild(deeperChild);
  }

  return deeperChild;
};

const MobileTabControl = ({ children, className }) => {
  const [[currentTab, setCurrentTab]] = useTabs();

  // eslint gets angry about using props from React.Children.map
  /* eslint-disable react/prop-types */
  return (
    <Select
      onChange={(e) => {
        setCurrentTab(e.target.value);
      }}
      css={css`
        margin-bottom: 1rem;
      `}
      className={className}
    >
      {React.Children.map(children, ({ props }) => (
        <option
          key={props.id}
          value={props.id}
          selected={props.id === currentTab}
          disabled={props.disabled}
        >
          {getDeepestChild(props.children)}
          {(props.count || props.count === 0) && ` (${props.count})`}
        </option>
      ))}
    </Select>
  );
  /* eslint-enable react/prop-types */
};

MobileTabControl.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

const Bar = ({ children, className }) => {
  const [, stacked, mobileBreakpoint] = useTabs();

  return (
    <>
      <MobileTabControl
        css={css`
          display: none;
          @media screen and (max-width: ${mobileBreakpoint}) {
            display: grid;
          }
        `}
      >
        {children}
      </MobileTabControl>
      <div
        className={className}
        role="tablist"
        css={css`
          border: none;
          display: flex;
          width: 100%;
          margin-bottom: 1em;
          overflow: auto;
          ${stacked &&
          css`
            flex-direction: column;
            min-height: 350px;
            overflow: none;
            overflow-wrap: break-word;
            padding: 7.5% 0;
            margin-right: 2rem;
            width: 30%;
          `}
          @media screen and (max-width: ${mobileBreakpoint}) {
            display: none;
          }
        `}
      >
        {React.Children.map(children, (child, index) =>
          React.cloneElement(child, { ...child.props, index })
        )}
      </div>
    </>
  );
};

Bar.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Bar;
