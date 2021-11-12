const { execSync } = require("child_process");
var pjson = require("../package.json");
const currentVersion = pjson.version;
const EXCLUDE_BRANCHES = ["master", "develop", "main"];
const REQUIRED_NODE_VERSION = 16;


/**
 * Check that the NPM_TOKEN environment variable is set
 * @returns {String} Either the latest version or ''
 */
const checkNpmToken = () => {
  const npmToken = process.env.NPM_TOKEN;
  if (!npmToken) {
    console.error(`❌ NPM_TOKEN is not set ❌`);
    process.exit(1);
  }
  console.log(`✅ NPM token environment variable is set ✅`);
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
  return executeCommand(`npm view ruairi-test dist-tags.${tag}`);
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
    console.log(`ℹ️ Branch tag '${branchName}' does not exist yet ℹ️`);
    console.log(`Next Version: ${currentVersion}-${branchName}.1`);
    return `${currentVersion}-${branchName}.1`;
  }
};

/**
 * Checks the node version you are using is correct
 */
const checkNodeVersion = () => {
  const nodeVersion = process.version;
  const nodeVersionParts = nodeVersion.split(".");
  const majorVersion = parseInt(nodeVersionParts[0].replace("v", ""));
  if (majorVersion !== REQUIRED_NODE_VERSION) {
    console.error(
      `❌ Currently using ${nodeVersion}, please run 'nvm use 16' to switch to Node 16 ❌`
    );
    process.exit(1);
  } else {
    console.log(`✅ Node version ${nodeVersion} is OK ✅`);
  }
};

/**
 * Checks for discrepancies between the yarn.lock and package.json
 */
const yarnInstall = () => {
  try {
    console.log("📦 Checking dependencies are up to date... 📦");
    execSync(`yarn install --frozen-lockfile`);
    console.log(`✅ yarn.lock is up to date ✅`);
  } catch (err) {
    console.log(`❌ Error: ${err} ❌`);
    console.error(
      `❌ yarn.lock is out of sync. Please run 'yarn install' to update! ❌`
    );
    process.exit(1);
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
  if (EXCLUDE_BRANCHES.includes(branchName)) {
    console.log(`ℹ️ Branch ${branchName} is excluded ℹ️`);
    process.exit(0);
  }
  const formattedBranchName = branchName.replace("/", "-");
  console.log({ formattedBranchName });
  const branchTagLatest = checkBranchTagExists(formattedBranchName);
  console.log({ branchTagLatest });
  const nextBranchVersion = getNextBranchVersion(
    formattedBranchName,
    branchTagLatest
  );
  console.log({ nextBranchVersion });
  checkNodeVersion();
  yarnInstall();
  setYarnVersion(nextBranchVersion);
  publishYarnVersion(formattedBranchName);
};

main();
