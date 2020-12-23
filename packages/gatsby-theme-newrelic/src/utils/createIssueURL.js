const DEFAULT_TITLE = 'Website Feedback';

/**
 * Constructs a new issue url with information pre-filled for the user.
 *
 * @param {string} repository The URL for the repository.
 * @param {string} [title] An (optional) title for the issue.
 * @param {string[]} labels An array of label titles.
 * @param {Object} page Optional information about the page (title and slug).
 * @param {string} page.title The title for the page.
 * @param {string} page.slug The slug for the page.
 * @param {string} page.siteUrl The base URL for the site.
 * @returns {string} The URL for a new issue.
 */
const createIssueURL = (repository, title, labels = [], page = {}) => {
  const baseURL = `${repository}/issues/new`;

  const params = new URLSearchParams();
  params.set('labels', labels.join(','));
  params.set('title', title || DEFAULT_TITLE);

  if (page.title && page.slug && page.siteUrl) {
    params.set('body', `Page: [${page.title}](${page.siteUrl}${page.slug})`);
  }

  return [baseURL, params.toString()].join('?');
};

export default createIssueURL;
