import React from 'react';
import PropTypes from 'prop-types';

const NoTranslate = ({ children, htmlElement: HtmlElement }) => (
  <HtmlElement className="notranslate">{children}</HtmlElement>
);

NoTranslate.propTypes = {
  children: PropTypes.node,
  htmlElement: PropTypes.string,
};

export default NoTranslate;
