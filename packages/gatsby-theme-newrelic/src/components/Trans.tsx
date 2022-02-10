import { Trans, TransProps } from 'react-i18next';
import { getI18nConfig } from '../utils/config';

// TODO: update getI18nConfig to provide types
interface i18nConfig {
  themeNamespace: string;
}

const ThemeTrans = (props: TransProps<string>) => {
  const { themeNamespace }: i18nConfig = getI18nConfig({});

  return <Trans {...props} ns={themeNamespace} />;
};

export default ThemeTrans;
