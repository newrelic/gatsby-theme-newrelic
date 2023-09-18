const prefixStorageKey = (name) => ['gatsby-theme-newrelic', name].join(':');
export const STORAGE_KEYS = {
  USER_ID: prefixStorageKey('userId'),
  LAST_ANNOUNCEMENT_DISMISSED: prefixStorageKey('lastAnnouncementDismissed'),
};
export const TRACKING_COOKIE_NAME = 'newrelic-gdpr-consent';
export const DEV_SEGMENT_WRITE_KEY = 'oMdv2YZCnzuC1iTVi9iCnFn6F9ycYb5v';
export const SWIFTYPE_ENGINE_KEY = 'Ad9HfGjDw4GRkcmJjUut';
export const CAMEL_CASE = /^[a-z]+([A-Z][a-z]*|[0-9]+)*$/;
export const TITLE_CASE = /^((^| )[A-Z\d][\w-]+)+$/;
export const SPLITS = {
  SIGNUP_BUTTON_TEXT: 'deven_signupbutton_text',
};

export const SPLIT_TRACKING_EVENTS = {
  SIGNUP_BUTTON_CLICK: 'DEVEN_signuptext_click',
};

export const FEEDBACK_FORM_TYPE = {
  general: 'userDocFeedback',
  install: 'userInstallFeedback',
};
