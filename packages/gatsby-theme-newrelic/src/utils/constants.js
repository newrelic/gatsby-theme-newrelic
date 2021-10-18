const prefixStorageKey = (name) => ['gatsby-theme-newrelic', name].join(':');

export const STORAGE_KEYS = {
  USER_ID: prefixStorageKey('userId'),
  LAST_ANNOUNCEMENT_DISMISSED: prefixStorageKey('lastAnnouncementDismissed'),
};

export const TRACKING_COOKIE_NAME = 'newrelic-gdpr-consent';

export const DEV_SEGMENT_WRITE_KEY = 'oMdv2YZCnzuC1iTVi9iCnFn6F9ycYb5v';
