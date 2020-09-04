const prefixStorageKey = (name) => ['gatsby-theme-newrelic', name].join(':');

export const SPLITS = {
  GLOBAL_HEADER_GITHUB_BUTTONS: 'developer-website_global-header-gh-buttons',
};

export const STORAGE_KEYS = {
  USER_ID: prefixStorageKey('userId'),
  BANNER_ID: prefixStorageKey('bannerId'),
};
