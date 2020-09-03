const prefixStorageKey = (name) => ['gatsby-theme-newrelic', name].join(':');

export const SPLITS = {
  GLOBAL_HEADER_GITHUB_BUTTONS: 'developer-website_global-header-gh-buttons',
};

export const SPLIT_TRACKING_EVENTS = {
  GLOBAL_HEADER_CLICK_ACTION: 'global_header.action_clicked',
};

export const STORAGE_KEYS = {
  USER_ID: prefixStorageKey('userId'),
};
