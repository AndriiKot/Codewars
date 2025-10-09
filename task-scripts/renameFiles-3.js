import { readFile } from 'node:fs/promises';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, join } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Путь к JSON файлу с массивом { folder, slug }
const foldersJsonPath = join(__dirname, 'testValidSlug.json');

// Преобразуем путь в URL с file://
const foldersJsonUrl = pathToFileURL(foldersJsonPath);

// Читаем JSON
const foldersJson = JSON.parse(await readFile(foldersJsonUrl, 'utf-8'));

async function main() {
  let valid = 0;
  let invalid = 0;
  let invalidFolders = [];

  const results = await Promise.all(
    foldersJson.map(async ({ folder, slug }) => {
      try {
        const res = await fetch(`https://www.codewars.com/api/v1/code-challenges/${slug}`);
        if (res.ok) {
          valid++;
        } else {
          invalid++;
          invalidFolders.push(folder);
        }
        return { folder, slug, ok: res.ok };
      } catch (err) {
        invalid++;
        invalidFolders.push(folder);
        return { folder, slug, ok: false, error: err.message };
      }
    }),
  );

  console.log('\n==== РЕЗУЛЬТАТ ====');
  console.log(`✅ Валидных: ${valid}`);
  console.log(`❌ Невалидных: ${invalid}`);

  if (invalidFolders.length > 0) {
    console.log('\n📂 Невалидные папки:');
    for (const name of invalidFolders) console.log(' -', name);
  } else {
    console.log('\n🎉 Все папки валидны!');
  }
}

await main();
