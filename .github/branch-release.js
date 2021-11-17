const { execSync } = require("child_process");
var pjson = require("../packages/gatsby-theme-newrelic/package.json");
const currentVersion = pjson.version;

/**
 * Check that the NPM_TOKEN environment variable is set
 * @returns {String} Either the latest version or ''
 */
const checkNpmToken = () => {
  const npmToken = process.env.NPM_AUTH_TOKEN;
  if (!npmToken) {
    console.error(`❌ NPM_AUTH_TOKEN environment variable is not set ❌`);
    process.exit(1);
  }
  console.log(`✅ NPM_AUTH_TOKEN environment variable is set ✅`);
};

/**
 * Get the name of the current working branch
 * @returns {String} The name of the current working branch
 */
const getBranchName = () => {
  return executeCommand(`git rev-parse --abbrev-ref HEAD`);
};

/**
 * Check the latest version on a given branch tag
 * @param {String} tag The tag to check
 * @returns {String} Either the latest version or ''
 */
const checkBranchTagExists = (tag) => {
  return executeCommand(`npm view @newrelic/gatsby-theme-newrelic dist-tags.${tag}`);
};

/**
 * Executes a bash command in the terminal using execSync
 * @param {String} cmd The command to execute
 * @returns {String} The result of the executed command
 */
const executeCommand = (cmd) => {
  try {
    const result = execSync(cmd);
    return result.toString().trim();
  } catch (err) {
    console.log(`❌ Error: ${err} ❌`);
    console.log(`❌ Stderr: ${err.stderr.toString()} ❌`);
    process.exit(1);
  }
};

/**
 * Removes a redirect if the slug is in the redirects array
 * @param {String} branchName The current working branch name
 * @param {String} branchTagVersion The latest version from the branch tag
 * @returns {String} The next branch version
 */
const getNextBranchVersion = (branchName, branchTagVersion) => {
  if (branchTagVersion) {
    console.log(`ℹ️ Branch tag '${branchName}' already exists ℹ️`);
    const baseVersion = branchTagVersion.substring(
      0,
      branchTagVersion.lastIndexOf(".")
    );
    const dotVersion = parseInt(
      branchTagVersion.substring(branchTagVersion.lastIndexOf(".") + 1)
    );
    console.log({ baseVersion, dotVersion });
    return `${baseVersion}.${dotVersion + 1}`;
  } else {
    console.log({ currentVersion });
    const baseVersion = currentVersion.indexOf("-") !== -1
      ? currentVersion.substring(0, currentVersion.indexOf("-"))
      : currentVersion;
    console.log({ baseVersion });
    console.log(`ℹ️ Branch tag '${branchName}' does not exist yet ℹ️`);
    console.log(`Next Version: ${baseVersion}-${branchName}.1`);
    return `${baseVersion}-${branchName}.1`;
  }
};

/**
 * Sets the yarn version to the next branch version
 * @param {String} version The version to set
 */
const setYarnVersion = (version) => {
  const yarnVersion = executeCommand(
    `yarn version --new-version "${version}" --no-git-tag-version`
  );
  console.log(`✅ Yarn version set ✅`);
  console.log(yarnVersion);
};

/**
 * Publish the yarn version to npm
 * @param {String} tag The tag to publish to
 */
const publishYarnVersion = (tag) => {
  const published = executeCommand(`yarn publish --access public --tag ${tag}`);
  console.log(`✅ Yarn version set ✅`);
  console.log(published);
};

const main = async () => {
  checkNpmToken();
  const branchName = getBranchName();
  const formattedBranchName = branchName.replace(/\W/g, "-");

  const newBranchName = formattedBranchName.endsWith("-")
    ? formattedBranchName.replace(/-$/, "")
    : formattedBranchName;
  console.log({ newBranchName });

  const branchTagLatest = checkBranchTagExists(newBranchName);
  console.log({ branchTagLatest });

  const nextBranchVersion = getNextBranchVersion(
    newBranchName,
    branchTagLatest
  );

  console.log({ nextBranchVersion });
  setYarnVersion(nextBranchVersion);
  publishYarnVersion(newBranchName);
};

main();
