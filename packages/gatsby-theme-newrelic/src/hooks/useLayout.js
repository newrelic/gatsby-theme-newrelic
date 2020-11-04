import { useContext } from 'react';
import LayoutContext from '../components/Layout/Context';

const useLayout = () => useContext(LayoutContext);

export default useLayout;
