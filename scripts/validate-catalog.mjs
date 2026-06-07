#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const repositoryRootDirectory = process.cwd();
const promptsRootDirectory = path.join(repositoryRootDirectory, 'prompts');
const requiredFields = ['title', 'slug', 'category', 'summary', 'builderstudio_url', 'usage', 'tags'];

function walkDirectory(directoryPath) {
  const directoryEntries = fs.readdirSync(directoryPath, { withFileTypes: true });
  let discoveredFiles = [];
  for (const directoryEntry of directoryEntries) {
    const fullPath = path.join(directoryPath, directoryEntry.name);
    if (directoryEntry.isDirectory()) {
      discoveredFiles = discoveredFiles.concat(walkDirectory(fullPath));
    } else {
      discoveredFiles.push(fullPath);
    }
  }
  return discoveredFiles;
}

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

if (!fs.existsSync(promptsRootDirectory)) {
  console.error('prompts directory not found');
  process.exit(1);
}

const promptJsonFiles = walkDirectory(promptsRootDirectory).filter((filePath) => filePath.endsWith('prompt.json'));
const seenSlugs = new Set();
let validationFailed = false;

for (const promptJsonFile of promptJsonFiles) {
  const promptDirectory = path.dirname(promptJsonFile);
  const promptMarkdownFile = path.join(promptDirectory, 'prompt.md');
  const promptPayload = JSON.parse(fs.readFileSync(promptJsonFile, 'utf8'));
  for (const requiredField of requiredFields) {
    if (!(requiredField in promptPayload)) {
      console.error(`Missing required field ${requiredField} in ${promptJsonFile}`);
      validationFailed = true;
    }
  }
  if (promptPayload.slug && seenSlugs.has(promptPayload.slug)) {
    console.error(`Duplicate slug ${promptPayload.slug} in ${promptJsonFile}`);
    validationFailed = true;
  }
  if (promptPayload.slug) {
    seenSlugs.add(promptPayload.slug);
  }
  if (promptPayload.builderstudio_url && !isValidHttpUrl(promptPayload.builderstudio_url)) {
    console.error(`builderstudio_url must be a valid http(s) URL in ${promptJsonFile}`);
    validationFailed = true;
  }
  if ('demo_url' in promptPayload && promptPayload.demo_url !== '' && !isValidHttpUrl(promptPayload.demo_url)) {
    console.error(`demo_url must be a valid http(s) URL when provided in ${promptJsonFile}`);
    validationFailed = true;
  }
  if (!fs.existsSync(promptMarkdownFile)) {
    console.error(`Missing prompt.md next to ${promptJsonFile}`);
    validationFailed = true;
  } else {
    const promptBody = fs.readFileSync(promptMarkdownFile, 'utf8').trim();
    if (promptBody.length < 40) {
      console.error(`Prompt body too short in ${promptMarkdownFile}`);
      validationFailed = true;
    }
  }
}

if (validationFailed) {
  process.exit(1);
}
console.log(`Validated ${promptJsonFiles.length} prompt entries successfully.`);
