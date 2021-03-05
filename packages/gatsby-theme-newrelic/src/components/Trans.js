import React from 'react';
import { Trans } from 'react-i18next';
import { getI18nConfig } from '../utils/config';

const ThemeTrans = (props) => {
  const { themeNamespace } = getI18nConfig({});

  return <Trans {...props} ns={themeNamespace} />;
};

export default ThemeTrans;
