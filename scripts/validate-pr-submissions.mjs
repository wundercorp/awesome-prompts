#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const diffRange = process.argv[2] || process.env.PULL_REQUEST_DIFF_RANGE || 'origin/main...HEAD';

function isValidHttpUrl(value) {
  if (typeof value !== 'string' || value.trim().length === 0) {
    return false;
  }
  try {
    const parsedUrl = new URL(value);
    return parsedUrl.protocol === 'https:' || parsedUrl.protocol === 'http:';
  } catch {
    return false;
  }
}

function getChangedFiles() {
  try {
    const output = execFileSync('git', ['diff', '--name-status', diffRange], { encoding: 'utf8' }).trim();
    if (!output) {
      return [];
    }
    return output.split('\n').map((line) => {
      const parts = line.split(/\t+/);
      return {
        status: parts[0],
        filePath: parts[parts.length - 1]
      };
    });
  } catch (error) {
    console.error(`Unable to compute pull request diff using range: ${diffRange}`);
    console.error(error.message);
    process.exit(1);
  }
}

const changedFiles = getChangedFiles();
const addedPromptJsonFiles = changedFiles
  .filter((changedFile) => changedFile.status.startsWith('A'))
  .map((changedFile) => changedFile.filePath)
  .filter((filePath) => /^prompts\/.+\/prompt\.json$/.test(filePath));

let validationFailed = false;

for (const promptJsonFile of addedPromptJsonFiles) {
  if (!fs.existsSync(promptJsonFile)) {
    console.error(`Added prompt metadata file is missing from working tree: ${promptJsonFile}`);
    validationFailed = true;
    continue;
  }
  const promptPayload = JSON.parse(fs.readFileSync(promptJsonFile, 'utf8'));
  if (!('demo_url' in promptPayload) || !isValidHttpUrl(promptPayload.demo_url)) {
    console.error(`New prompt submissions must include a valid demo_url in ${promptJsonFile}`);
    validationFailed = true;
  }
  const promptMarkdownFile = path.join(path.dirname(promptJsonFile), 'prompt.md');
  if (!fs.existsSync(promptMarkdownFile)) {
    console.error(`New prompt submissions must include prompt.md next to ${promptJsonFile}`);
    validationFailed = true;
  }
}

if (validationFailed) {
  console.error('Pull request prompt submission validation failed. Default seeded prompts do not need demo_url, but every newly added prompt in a PR does.');
  process.exit(1);
}

if (addedPromptJsonFiles.length === 0) {
  console.log('No newly added prompt submissions detected in this pull request.');
} else {
  console.log(`Validated ${addedPromptJsonFiles.length} new prompt submission(s) with demo_url.`);
}
