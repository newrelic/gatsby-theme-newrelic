import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import useTabs from './useTabs';
import Select from '../Select';
import { useStaticQuery, graphql } from 'gatsby';

const MobileTabControl = ({ children, className }) => {
  const [currentTab, setCurrentTab] = useTabs();
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
          {props.children}
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
  const {
    site: {
      layout: { mobileBreakpoint },
    },
  } = useStaticQuery(graphql`
    query BarQuery {
      site {
        layout {
          mobileBreakpoint
        }
      }
    }
  `);

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
          display: flex;
          width: 100%;
          border-bottom: 1px solid var(--divider-color);
          margin-bottom: 1em;
          overflow: auto;
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
