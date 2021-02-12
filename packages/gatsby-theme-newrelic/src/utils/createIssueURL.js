/**
 * Constructs a new issue url with information pre-filled for the user.
 *
 * @param {Object} options
 * @param {string} options.repository The URL for the repository.
 * @param {string?} options.issueTitle An (optional) title for the issue.
 * @param {string[]} options.labels An array of label titles.
 * @param {string?} options.issueBody An (optional) description for the issue.
 * @returns {string} The URL for a new issue.
 */
const createIssueURL = ({ repository, issueTitle, issueBody, labels = [] }) => {
  const url = new URL(`${repository}/issues/new`);
  const params = new URLSearchParams();

  if (labels?.length) {
    params.set('labels', labels.join(','));
  }

  if (issueTitle) {
    params.set('title', issueTitle);
  }

  if (issueBody) {
    params.set('body', issueBody);
  }

  url.search = params;

  return url.href;
};

export default createIssueURL;
