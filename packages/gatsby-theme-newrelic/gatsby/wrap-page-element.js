/* eslint-disable react/prop-types */
import React from 'react';
import GlobalStyles from '../src/components/GlobalStyles';

const wrapPageElement = ({ element }) => (
  <>
    <h2>Why am I not showing up?</h2>
    <GlobalStyles />
    {element}
  </>
);

export default wrapPageElement;
