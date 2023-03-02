import React from 'react'
import PropTypes from 'prop-types';

import PopoverButton from './PopoverButton';
import { TwoButton } from './layouts'

// this will be replaced by a file
const json = {
  apm: {
    inlineText: 'application performance monitoring',
    layout: 'TwoButton',
    popover: {
      text: 'Lorem ipsum dolor, this is a paragraph that is longer than the title.',
      title: 'Lorem ipsum dolor',
      primaryButton: 'Click me pretty please!',
      secondaryButton: 'or me! blease',
      primaryButtonUrl: 'https://example.org',
      secondaryButtonUrl: 'https://example.org/2',
    },
  },
};

const Layouts = {
  TwoButton
}

const InlinePopover = ({ type }) => {
  if (json[type] == null) return null;

  const { inlineText, popover } = json[type];
  const layout = json[type].layout ?? 'TwoButton';
  const Component = Layouts[layout];

  return (
    <PopoverButton
      tessenCategory={`${type}Popover`}
      Popover={(props) => <Component {...props} {...popover} />}
    >
      {inlineText}
    </PopoverButton>
  );
};

InlinePopover.propTypes = {
  type: PropTypes.oneOf(Object.keys(Layouts))
}


export default InlinePopover;
