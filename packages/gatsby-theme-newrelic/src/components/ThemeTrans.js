import React from 'react';
import { Trans } from 'react-i18next';
import { themeNamespace } from '../utils/defaultOptions';

const ThemeTrans = (props) => <Trans {...props} ns={themeNamespace} />;

export default ThemeTrans;
