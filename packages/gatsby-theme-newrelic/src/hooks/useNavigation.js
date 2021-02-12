import { useContext } from 'react';
import NavigationContext from '../components/NavigationContext';

const useNavigation = () => useContext(NavigationContext);

export default useNavigation;
