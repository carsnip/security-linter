const core = require('@actions/core');
const github = require('@actions/github');

try {
  console.log('Action running');
} catch(error) {
  core.setFailed(error.message);
}
