import { useContext } from 'react';
import LocaleContext from '../components/LocaleContext';

const useLocale = () => useContext(LocaleContext);

export default useLocale;
