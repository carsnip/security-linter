import * as core from '@actions/core';
import * as github from '@actions/github';

try {
  console.log('Action running');
  const myToken = core.getInput('myToken');
  const octokit = github.getOctokit(myToken);

  if (github.context.eventName === 'pull_request') {
    const prNumber = github.context.payload.pull_request.number
    console.log(prNumber);
    console.log(github.context.repo.repo);
    const files = octokit.pulls.listFiles({
      repo: github.context.repo.repo,
      pull_number: prNumber
    });
    console.log(files);
  }
} catch(error) {
  core.setFailed(error.message);
}
