import { useContext } from 'react';
import LayoutContext from '../components/LayoutContext';

const useLayout = () => useContext(LayoutContext);

export default useLayout;
