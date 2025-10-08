import { readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

function slugify(name) {
  return name
    .replace(/^_+/, '')
    .replace(/^[0-9]+[_-]*/, '')
    .replace(/__+/g, '-')
    .replace(/[\s_]+/g, '-')
    .replace(/[^a-zA-Z0-9-]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase();
}

const baseDir = '../'; // путь к папке с kyu
const kyuDirs = readdirSync(baseDir).filter((name) => statSync(join(baseDir, name)).isDirectory() && name.startsWith('kyu-'));

let allSlugs = [];

for (const kyu of kyuDirs) {
  const innerFolders = readdirSync(join(baseDir, kyu)).filter((name) => statSync(join(baseDir, kyu, name)).isDirectory());
  for (const folder of innerFolders) {
    allSlugs.push(slugify(folder));
  }
}

const results = await Promise.all(
  allSlugs.map(async (slug) => {
    const res = await fetch(`https://www.codewars.com/api/v1/code-challenges/${slug}`);
    return { slug, ok: res.ok };
  }),
);

for (const r of results) {
  if (r.ok) valid++;
  else invalid++;
}
