import React, { useEffect, useState } from 'react';
import Banner from './Banner';
import createPersistedState from 'use-persisted-state';
import { MDXProvider } from '@mdx-js/react';
import { STORAGE_KEYS } from '../utils/constants';
import Announcement from '../announcement.mdx';

const useBannerIdState = createPersistedState(STORAGE_KEYS.BANNER_ID);

const AnnouncementBanner = () => {
  const childrenHash = btoa(Announcement);
  const [bannerId, setBannerId] = useBannerIdState();
  const [visible, setVisible] = useState(bannerId !== childrenHash);

  useEffect(() => {
    if (bannerId === childrenHash) {
      setVisible(false);
    }
  }, [bannerId, childrenHash]);

  return (
    <Banner visible={visible} onClose={() => setBannerId(childrenHash || null)}>
      <MDXProvider>
        <Announcement />
      </MDXProvider>
    </Banner>
  );
};

export default AnnouncementBanner;
