const DEFAULT_SITE_LABELS = {
  'https://developer.newrelic.com': 'developer',
  'https://opensource.newrelic.com': 'open source',
  'https://docs.newrelic.com': 'docs',
  'https://github.com': 'github',
  'https://terraform.io': 'terraform',
  'https://kubernetes.io': 'kubernetes',
  'https://youtube.com': 'youtube',
  'https://discuss.newrelic.com': 'discuss',
  'https://blog.newrelic.com': 'blog',
  'https://newrelic.com': 'newrelic.com',
  'https://marketplace.visualstudio.com': 'visual studio',
  'https://learn.newrelic.com': 'learn',
};

const withDefaults = () => {
  return {
    relatedResources: {
      labels: {
        ...DEFAULT_SITE_LABELS,
      },
    },
  };
};

module.exports = { withDefaults };
