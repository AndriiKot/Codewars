/* eslint-disable max-lines */
import { readdirSync, statSync, writeFileSync, unlinkSync, renameSync, existsSync } from 'node:fs';
import { join, resolve, dirname } from 'node:path';

/* ---------- Настройки ---------- */
const rootPath = '../';
const absolutePath = resolve(rootPath);

/* ---------- Утилиты ---------- */

// безопасное чтение директории
function safeReaddir(path) {
  try {
    return readdirSync(path);
  } catch {
    return [];
  }
}

// преобразование имени папки в slug
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

// очищаем описание Codewars
function cleanDescription(desc, lang = 'javascript') {
  desc = desc.replace(/~~~if-not:([^\n]*)\n([\s\S]*?)~~~/g, (m, langs, content) => {
    const list = langs.split(',').map((s) => s.trim().toLowerCase());
    return list.includes(lang) ? '' : content;
  });

  desc = desc.replace(/~~~if:([^\n]*)\n([\s\S]*?)~~~/g, (m, langs, content) => {
    const list = langs.split(',').map((s) => s.trim().toLowerCase());
    return list.includes(lang) ? content : '';
  });

  desc = desc.replace(/~~~(if|if-not)[^\n]*\n?/g, '');
  return desc.replace(/~~~/g, '```');
}

// получить метаданные по slug
async function getTaskMetadata(slug) {
  const res = await fetch(`https://www.codewars.com/api/v1/code-challenges/${slug}`);
  if (!res.ok) throw new Error(`Не найден slug: ${slug}`);

  const data = await res.json();
  return {
    id: data.id,
    name: data.name,
    url: data.url,
    rank: data.rank?.name || 'unknown',
    slug: data.slug,
    category: data.category,
    description: cleanDescription(data.description),
  };
}

// безопасное удаление файла
function deleteIfExists(dir, fileName) {
  const filePath = join(dir, fileName);
  if (existsSync(filePath)) {
    unlinkSync(filePath);
    console.log(`🗑️ Удалён: ${fileName}`);
  }
}

// создание README.md
function createReadme(taskPath, metadata) {
  const content = `# ${metadata.name}

**Rank:** ${metadata.rank}  
**Category:** ${metadata.category}  
**URL:** [${metadata.url}](${metadata.url})

---

## 📝 Description

${metadata.description.trim()}
`;
  writeFileSync(join(taskPath, 'README.md'), content, 'utf-8');
  console.log(`✅ README.md создан: ${taskPath}`);
}

// переименование папки
function renameTaskFolder(taskPath, slug) {
  const parentDir = dirname(taskPath);
  const folderName = taskPath.split(/[/\\]/).pop();
  const match = folderName.match(/^(_+\d+__)(.*)$/);

  if (!match) {
    console.warn(`⚠️ Пропущено (нет префикса): ${folderName}`);
    return;
  }

  const [, prefix] = match;
  const newFolderName = `${prefix}${slug}`;
  const newPath = join(parentDir, newFolderName);

  try {
    renameSync(taskPath, newPath);
    console.log(`📁 Папка переименована: ${folderName} → ${newFolderName}`);
  } catch (err) {
    console.error(`Ошибка при переименовании: ${err.message}`);
  }
}

/* ---------- Основная логика ---------- */

const kyuDirs = safeReaddir(absolutePath).filter((name) => statSync(join(absolutePath, name)).isDirectory() && name.startsWith('kyu-'));

let valid = 0;
let invalid = 0;

for (const kyu of kyuDirs) {
  const tasks = safeReaddir(join(absolutePath, kyu)).filter((name) => statSync(join(absolutePath, kyu, name)).isDirectory());

  for (const folder of tasks) {
    const taskPath = join(absolutePath, kyu, folder);
    const slug = slugify(folder);

    try {
      const metadata = await getTaskMetadata(slug);
      createReadme(taskPath, metadata);
      deleteIfExists(taskPath, 'DESCRIPTION.txt');
      renameTaskFolder(taskPath, metadata.slug);
      valid++;
    } catch (err) {
      console.error(`❌ Ошибка для ${folder}: ${err.message}`);
      invalid++;
    }
  }
}

console.log('\n==== ИТОГ ====');
console.log(`✅ Валидных задач: ${valid}`);
console.log(`❌ Ошибок: ${invalid}`);
