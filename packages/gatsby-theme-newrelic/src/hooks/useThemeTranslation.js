import { useTranslation } from 'react-i18next';
import { getI18nConfig } from '../utils/config';

const useThemeTranslation = () => {
  const { themeNamespace } = getI18nConfig({});

  return useTranslation(themeNamespace);
};

export default useThemeTranslation;
