const prefixStorageKey = (name) => ['gatsby-theme-newrelic', name].join(':');

const STORAGE_KEYS = {
  USER_ID: prefixStorageKey('userId'),
  LAST_ANNOUNCEMENT_DISMISSED: prefixStorageKey('lastAnnouncementDismissed'),
};

const TRACKING_COOKIE_NAME = 'newrelic-gdpr-consent';

const DEV_SEGMENT_WRITE_KEY = 'oMdv2YZCnzuC1iTVi9iCnFn6F9ycYb5v';

const SWIFTYPE_ENGINE_KEY = 'Ad9HfGjDw4GRkcmJjUut';

const SPLITS = {
  SIGNUP_BUTTON_TEXT: 'deven_signupbutton_text',
};

const SPLIT_TRACKING_EVENTS = {
  SIGNUP_BUTTON_CLICK: 'DEVEN_signuptext_click',
};

module.exports = {
  STORAGE_KEYS,
  TRACKING_COOKIE_NAME,
  DEV_SEGMENT_WRITE_KEY,
  SWIFTYPE_ENGINE_KEY,
  SPLITS,
  SPLIT_TRACKING_EVENTS,
};
