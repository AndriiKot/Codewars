import { readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

const rootPath = '../';
const absolutePath = resolve(rootPath);

const safeReaddir = (path) => {
  try {
    return readdirSync(path);
  } catch (err) {
    console.error('Ошибка чтения директории:', err.message);
    return [];
  }
};

const kyuPaths = safeReaddir(absolutePath)
  .filter((name) => statSync(join(absolutePath, name)).isDirectory() && name.startsWith('kyu'))
  .map((name) => join(absolutePath, name));

const allTaskPaths = kyuPaths.flatMap((kyu) => safeReaddir(kyu).map((task) => join(kyu, task)));

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

function cleanDescription(desc, lang = 'javascript') {
  // 1. Обрабатываем if-not: показываем блок, если язык не входит в список
  desc = desc.replace(/~~~if-not:([^\n]*)\n([\s\S]*?)~~~/g, (match, langs, content) => {
    const list = langs.split(',').map((s) => s.trim().toLowerCase());
    return list.includes(lang.toLowerCase()) ? '' : content;
  });

  // 2. Обрабатываем if: показываем блок, если язык входит в список
  desc = desc.replace(/~~~if:([^\n]*)\n([\s\S]*?)~~~/g, (match, langs, content) => {
    const list = langs.split(',').map((s) => s.trim().toLowerCase());
    return list.includes(lang.toLowerCase()) ? content : '';
  });

  // 3. Убираем остаточные маркеры
  desc = desc.replace(/~~~(if|if-not)[^\n]*\n?/g, '');

  // 4. Заменяем оставшиеся тильды на стандартные Markdown-блоки
  return desc.replace(/~~~/g, '```');
}

// 🧩 Создание README.md
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
