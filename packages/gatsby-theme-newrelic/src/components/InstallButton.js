import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Dropdown from './Dropdown';
import Link from './Link';
import { css } from '@emotion/react';

const sampleItems = new Array(10).fill().map((_, i) => i + 1);

const createMenuItems = (items) => {
  const menuItems = [];
  for (const item of items) {
    menuItems.push(<Dropdown.MenuItem>{item}</Dropdown.MenuItem>);
  }
  return menuItems;
};

const InstallButton = ({ children, guid, title, ...props }) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: row;
        float: right;
      `}
    >
      <Button
        as={Link}
        to="https://one.newrelic.com"
        variant={Button.VARIANT.PRIMARY}
        css={css`
          border-bottom-right-radius: 0px;
          border-top-right-radius: 0px;
          margin-right: 2px;
        `}
      >
        {title}
      </Button>
      <Dropdown>
        <Dropdown.Toggle
          variant={Button.VARIANT.PRIMARY}
          css={css`
            border-bottom-left-radius: 0px;
            border-top-left-radius: 0px;
            padding: 5px;
          `}
        />
        <Dropdown.Menu>{createMenuItems(sampleItems)}</Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

InstallButton.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};

export default InstallButton;
