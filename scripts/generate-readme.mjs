#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const repositoryRootDirectory = process.cwd();
const promptsRootDirectory = path.join(repositoryRootDirectory, 'prompts');
const readmePath = path.join(repositoryRootDirectory, 'README.md');

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

function categoryLabel(categorySlug) {
  return categorySlug.replace(/-/g, ' ').replace(/\b\w/g, (character) => character.toUpperCase());
}

const promptJsonFiles = walkDirectory(promptsRootDirectory).filter((filePath) => filePath.endsWith('prompt.json'));
const categories = new Map();
for (const promptJsonFile of promptJsonFiles) {
  const promptPayload = JSON.parse(fs.readFileSync(promptJsonFile, 'utf8'));
  if (!categories.has(promptPayload.category)) {
    categories.set(promptPayload.category, []);
  }
  const relativeDirectory = path.relative(repositoryRootDirectory, path.dirname(promptJsonFile)).replace(/\\/g, '/');
  categories.get(promptPayload.category).push({ ...promptPayload, relativeDirectory });
}

const sortedCategoryNames = [...categories.keys()].sort();
const readmeLines = [];
readmeLines.push('# awesome-prompts');
readmeLines.push('');
readmeLines.push('![awesome-prompts hero banner](assets/hero-banner.png)');
readmeLines.push('');
readmeLines.push('Open-source prompt resources designed to be copied one-shot into **[BuilderStudio](https://builderstudio.dev/)**. BuilderStudio is the primary place where these prompts can be brought to life.');
readmeLines.push('');
readmeLines.push('## Why this repo exists');
readmeLines.push('');
readmeLines.push('- Keep high-quality prompts open, reusable, and easy to discover.');
readmeLines.push('- Make every prompt easy to copy into BuilderStudio for one-shot generation.');
readmeLines.push('- Organize prompts by category so contributors can submit focused additions through PRs.');
readmeLines.push('- Require a public demo link for every new prompt submitted through a pull request.');
readmeLines.push('');
readmeLines.push('## How to use');
readmeLines.push('');
readmeLines.push('1. Pick a prompt from the catalog below.');
readmeLines.push('2. Open its `prompt.md` file.');
readmeLines.push('3. Copy the full prompt.');
readmeLines.push('4. Paste it into **[builderstudio.dev](https://builderstudio.dev/)** and run it one-shot.');
readmeLines.push('5. For community-submitted prompts, open the attached demo link to preview what the prompt can create.');
readmeLines.push('6. We recomment GPT-5.3-Codex when generating these sites.');
readmeLines.push('');
readmeLines.push('## Submission rule');
readmeLines.push('');
readmeLines.push('Default seeded prompts in this repository may omit `demo_url`. **Every new prompt added through a pull request must include a valid `demo_url` in `prompt.json`.**');
readmeLines.push('');
readmeLines.push(`## Catalog (${promptJsonFiles.length} prompts)`);
readmeLines.push('');
readmeLines.push('| Category | Prompt | Summary | BuilderStudio | Demo |');
readmeLines.push('| --- | --- | --- | --- | --- |');
for (const categoryName of sortedCategoryNames) {
  const categoryItems = categories.get(categoryName).sort((left, right) => left.title.localeCompare(right.title));
  for (const item of categoryItems) {
    const sanitizedSummary = item.summary.replace(/\|/g, '\\|');
    const demoCell = item.demo_url ? `[Demo](${item.demo_url})` : 'Seed prompt';
    readmeLines.push(`| ${categoryName} | [${item.title}](${item.relativeDirectory}/prompt.md) | ${sanitizedSummary} | [Open BuilderStudio](${item.builderstudio_url}) | ${demoCell} |`);
  }
}
for (const categoryName of sortedCategoryNames) {
  readmeLines.push('');
  readmeLines.push(`## ${categoryLabel(categoryName)}`);
  readmeLines.push('');
  const categoryItems = categories.get(categoryName).sort((left, right) => left.title.localeCompare(right.title));
  for (const item of categoryItems) {
    readmeLines.push(`### ${item.title}`);
    readmeLines.push('');
    readmeLines.push(`- Summary: ${item.summary}`);
    readmeLines.push(`- Prompt file: [${item.relativeDirectory}/prompt.md](${item.relativeDirectory}/prompt.md)`);
    readmeLines.push(`- BuilderStudio: [builderstudio.dev](${item.builderstudio_url})`);
    if (item.demo_url) {
      readmeLines.push(`- Demo: [view demo](${item.demo_url})`);
    } else {
      readmeLines.push('- Demo: seed prompt, no demo URL required');
    }
    readmeLines.push(`- One-shot usage: ${item.usage}`);
    readmeLines.push('');
  }
}
readmeLines.push('');
readmeLines.push('## Contributing');
readmeLines.push('');
readmeLines.push('Add a new prompt under `prompts/<category>/<slug>/` with both `prompt.md` and `prompt.json`. New prompt PRs must include `demo_url`.');
readmeLines.push('');
readmeLines.push('```bash');
readmeLines.push('npm run validate');
readmeLines.push('npm run generate:readme');
readmeLines.push('npm run validate:pr');
readmeLines.push('```');
readmeLines.push('');
fs.writeFileSync(readmePath, readmeLines.join('\n') + '\n');
console.log(`Generated README.md with ${promptJsonFiles.length} prompts.`);
