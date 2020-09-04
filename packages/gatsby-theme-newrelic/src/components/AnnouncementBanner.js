import React, { useEffect, useState } from 'react';
import Banner from './Banner';
import createPersistedState from 'use-persisted-state';
import { STORAGE_KEYS } from '../utils/constants';

const useBannerIdState = createPersistedState(STORAGE_KEYS.BANNER_ID);

const AnnouncementBanner = ({ children }) => {
  const childrenHash = btoa(children);
  const [bannerId, setBannerId] = useBannerIdState();
  const [visible, setVisible] = useState(bannerId !== childrenHash);

  useEffect(() => {
    if (bannerId === childrenHash) {
      setVisible(false);
    }
  }, [bannerId, childrenHash]);

  return (
    <Banner visible={visible} onClose={() => setBannerId(childrenHash)}>
      {children}
    </Banner>
  );
};

export default AnnouncementBanner;
