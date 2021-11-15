const prefixStorageKey = (name) => ['gatsby-theme-newrelic', name].join(':');

const STORAGE_KEYS = {
  USER_ID: prefixStorageKey('userId'),
  LAST_ANNOUNCEMENT_DISMISSED: prefixStorageKey('lastAnnouncementDismissed'),
};

const TRACKING_COOKIE_NAME = 'newrelic-gdpr-consent';

const DEV_SEGMENT_WRITE_KEY = 'oMdv2YZCnzuC1iTVi9iCnFn6F9ycYb5v';

const SWIFTYPE_ENGINE_KEY = 'Ad9HfGjDw4GRkcmJjUut';

const CAMEL_CASE = /^[a-z]+([A-Z][a-z]*|[0-9]+)*$/;
const TITLE_CASE = /^((^| )[A-Z\d][\w-]+)+$/;

module.exports = {
  STORAGE_KEYS,
  TRACKING_COOKIE_NAME,
  DEV_SEGMENT_WRITE_KEY,
  SWIFTYPE_ENGINE_KEY,
  CAMEL_CASE,
  TITLE_CASE,
};
