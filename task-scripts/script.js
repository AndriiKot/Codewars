/* eslint-disable max-lines, no-control-regex */
import { readdirSync, readFileSync, statSync, writeFileSync, unlinkSync, renameSync, existsSync } from 'node:fs';

import { join, resolve, dirname } from 'node:path';

const rootPath = '../';
const absolutePath = resolve(rootPath);

// 🔹 Безопасное чтение директории
const safeReaddir = (path) => {
  try {
    return readdirSync(path);
  } catch (err) {
    console.error('Ошибка чтения директории:', err.message);
    return [];
  }
};

// 🔹 Получаем все пути к папкам kyu
const kyuPaths = safeReaddir(absolutePath)
  .filter((name) => statSync(join(absolutePath, name)).isDirectory() && name.startsWith('kyu'))
  .map((name) => join(absolutePath, name));

// 🔹 Получаем все задачи внутри каждой папки kyu
const allTaskPaths = kyuPaths.flatMap((kyu) => safeReaddir(kyu).map((task) => join(kyu, task)));

// 🔹 Получаем метаданные задачи по ID
async function getTaskMetadata(id) {
  const res = await fetch(`https://www.codewars.com/api/v1/code-challenges/${id}`);
  if (!res.ok) {
    throw new Error(`Ошибка загрузки данных по ID: ${id}`);
  }

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

// 🔹 Очищаем описание (Codewars имеет условные блоки)
function cleanDescription(desc, lang = 'javascript') {
  desc = desc.replace(/~~~if-not:([^\n]*)\n([\s\S]*?)~~~/g, (match, langs, content) => {
    const list = langs.split(',').map((s) => s.trim().toLowerCase());
    return list.includes(lang.toLowerCase()) ? '' : content;
  });

  desc = desc.replace(/~~~if:([^\n]*)\n([\s\S]*?)~~~/g, (match, langs, content) => {
    const list = langs.split(',').map((s) => s.trim().toLowerCase());
    return list.includes(lang.toLowerCase()) ? content : '';
  });

  desc = desc.replace(/~~~(if|if-not)[^\n]*\n?/g, '');
  return desc.replace(/~~~/g, '```');
}

// 🔹 Создание README.md и удаление служебных файлов
function createReadme(taskPath, metadata) {
  const content = `# ${metadata.name}

**Rank:** ${metadata.rank}  
**Category:** ${metadata.category}  
**URL:** [${metadata.url}](${metadata.url})

---

## 📝 Description

${metadata.description.trim()}
`;

  const readmePath = join(taskPath, 'README.md');
  writeFileSync(readmePath, content, { encoding: 'utf-8' });
  console.log(`✅ README.md создан: ${readmePath}`);

  // Удаляем DESCRIPTION.txt и taskId.txt
  deleteIfExists(taskPath, 'DESCRIPTION.txt');
  deleteIfExists(taskPath, 'taskId.txt');

  // После успешного создания — переименовываем папку
  renameTaskFolder(taskPath, metadata.slug);
}

// 🔹 Безопасное удаление файла
function deleteIfExists(dir, fileName) {
  const filePath = join(dir, fileName);
  if (existsSync(filePath)) {
    try {
      unlinkSync(filePath);
      console.log(`🗑️ Удалён: ${filePath}`);
    } catch (err) {
      console.error(`Ошибка при удалении ${fileName}:`, err.message);
    }
  }
}

// 🔹 Переименование папки задачи
// 🔹 Переименование папки задачи (с очисткой недопустимых символов)
function renameTaskFolder(taskPath, slug) {
  const parentDir = dirname(taskPath);
  const folderName = taskPath.split(/[/\\]/).pop(); // текущее имя папки

  // Разделяем на "_001__" и "Even_Or_Odd"
  const match = folderName.match(/^(_+\d+__)(.*)$/);
  if (!match) {
    console.warn(`⚠️ Пропущено: ${folderName} — формат не соответствует _001__...`);
    return;
  }

  const [, prefix] = match;

  // Очистка недопустимых символов для имени папки
  const sanitizedSlug = slug
    .replace(/[<>:"/\\|?*\x00-\x1F]/g, '') // удаляем запрещённые в Windows символы
    .replace(/\s+/g, '_') // пробелы → _
    .replace(/[.]+$/g, '') // удаляем точки в конце
    .trim();

  const newFolderName = `${prefix}${sanitizedSlug}`;
  const newPath = join(parentDir, newFolderName);

  try {
    renameSync(taskPath, newPath);
    console.log(`📁 Папка переименована:\n   ${folderName} → ${newFolderName}`);
  } catch (err) {
    console.error(`❌ Ошибка при переименовании ${folderName}:`, err.message);
  }
}

// 🚀 Основной цикл
for (const task of allTaskPaths) {
  const files = safeReaddir(task);
  if (files.includes('taskId.txt')) {
    const id = readFileSync(join(task, 'taskId.txt'), { encoding: 'utf-8' }).trim();
    try {
      const metadata = await getTaskMetadata(id);
      createReadme(task, metadata);
    } catch (err) {
      console.error(`Ошибка обработки задачи ${id}:`, err.message);
    }
  }
}
