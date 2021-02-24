import Cookies from 'js-cookie';
import { TRACKING_COOKIE_NAME } from './constants';

export const canTrack = () => Cookies.get(TRACKING_COOKIE_NAME) === 'true';
