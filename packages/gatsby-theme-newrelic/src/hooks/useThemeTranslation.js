import { themeNamespace } from '../utils/defaultOptions';
import { useTranslation } from 'react-i18next';

const useThemeTranslation = () => useTranslation(themeNamespace);

export default useThemeTranslation;
