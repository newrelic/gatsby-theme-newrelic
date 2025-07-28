const prefixStorageKey = (name) => ['gatsby-theme-newrelic', name].join(':');

const STORAGE_KEYS = {
  USER_ID: prefixStorageKey('userId'),
  LAST_ANNOUNCEMENT_DISMISSED: prefixStorageKey('lastAnnouncementDismissed'),
};

const TRACKING_COOKIE_NAME = 'newrelic-gdpr-consent';

// Commented out to disable segment tracking and avoid edge function costs
// const DEV_SEGMENT_WRITE_KEY = 'n9T9St8geATEFC1tmc0XH7XzEsOSVZCK';

const SWIFTYPE_ENGINE_KEY = 'Ad9HfGjDw4GRkcmJjUut';

const CAMEL_CASE = /^[a-z]+([A-Z][a-z]*|[0-9]+)*$/;
const TITLE_CASE = /^((^| )[A-Z\d][\w-]+)+$/;
const SPLITS = {
  SIGNUP_BUTTON_TEXT: 'deven_signupbutton_text',
};

const SPLIT_TRACKING_EVENTS = {
  SIGNUP_BUTTON_CLICK: 'DEVEN_signuptext_click',
};

const FEEDBACK_FORM_TYPE = {
  general: 'userDocFeedback',
  install: 'userInstallFeedback',
};

const NR_SITES = {
  DOCS: 'DOCS',
  COMMUNITY: 'COMMUNITY',
  LEARN: 'LEARN',
};

const HEADER_LINKS = new Map();

HEADER_LINKS.set(NR_SITES.DOCS, {
  text: 'Docs',
  href: 'https://docs.newrelic.com/',
})
  .set(NR_SITES.COMMUNITY, {
    text: 'Community',
    href: 'https://discuss.newrelic.com/',
  })
  .set(NR_SITES.LEARN, {
    text: 'Learn',
    href: 'https://learn.newrelic.com/',
  });

module.exports = {
  CAMEL_CASE,
  // DEV_SEGMENT_WRITE_KEY, // Commented out to disable segment tracking
  FEEDBACK_FORM_TYPE,
  HEADER_LINKS,
  NR_SITES,
  SPLITS,
  SPLIT_TRACKING_EVENTS,
  STORAGE_KEYS,
  SWIFTYPE_ENGINE_KEY,
  TITLE_CASE,
  TRACKING_COOKIE_NAME,
};
