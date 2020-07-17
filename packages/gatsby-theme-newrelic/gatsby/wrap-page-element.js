/* eslint-disable react/prop-types */
import React from 'react';
import GlobalStyles from '../src/components/GlobalStyles';

const wrapPageElement = ({ element }) => (
  <>
    <GlobalStyles />
    {element}
  </>
);

export default wrapPageElement;
