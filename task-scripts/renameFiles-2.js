import { readdirSync, statSync, writeFileSync } from 'node:fs';
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

let allTasks = [];

for (const kyu of kyuDirs) {
  const innerFolders = readdirSync(join(baseDir, kyu)).filter((name) => statSync(join(baseDir, kyu, name)).isDirectory());
  for (const folder of innerFolders) {
    allTasks.push({
      original: folder,
      slug: slugify(folder),
    });
  }
}

let valid = 0;
let invalid = 0;
let invalidFolders = [];

const results = await Promise.all(
  allTasks.map(async ({ original, slug }) => {
    const res = await fetch(`https://www.codewars.com/api/v1/code-challenges/${slug}`);
    return { original, slug, ok: res.ok };
  }),
);

for (const r of results) {
  if (r.ok) valid++;
  else {
    invalid++;
    invalidFolders.push(r.original);
  }
}

console.log('\n==== РЕЗУЛЬТАТ ====');
console.log(`✅ Валидных: ${valid}`);
console.log(`❌ Невалидных: ${invalid}`);

if (invalidFolders.length > 0) {
  console.log('\n📂 Невалидные папки:');
  for (const name of invalidFolders) {
    console.log(' -', name);
  }

  // 💾 сохраняем массив в JSON
  const outputPath = join('.', 'invalidFolders.json');
  writeFileSync(outputPath, JSON.stringify(invalidFolders, null, 2), 'utf-8');
  console.log(`\n📁 Список невалидных папок записан в ${outputPath}`);
} else {
  console.log('\n🎉 Все папки валидны!');
}
