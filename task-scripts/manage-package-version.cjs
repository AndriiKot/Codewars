const fs = require('node:fs');
const path = require('node:path');
const { execSync } = require('node:child_process');
const { green } = require('chalk'); 

const packageJsonPath = path.join(__dirname, '../package.json');
const versionTag = execSync('git describe --tags --abbrev=0').toString().trim();

if (!versionTag || !/^version_(\d+)_([\d]+)_([\d]+)$/.test(versionTag)) {
  console.error('Tag must be in the format version_X_Y_Z');
  process.exit(1);
}

const newVersion = versionTag.replace('version_', '').replace(/_/g, '.');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));

if (!(packageJson.version === newVersion)) {
  packageJson.version = newVersion;
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n', 'utf-8');
  execSync('git add package.json');
  console.log(green(`Updated package.json version to ${newVersion}`));
}
