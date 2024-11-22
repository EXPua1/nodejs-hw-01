import path from 'node:path';
import { fileURLToPath } from 'url';

// Создаём __dirname для ES-модуля
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Определяем абсолютный путь
export const PATH_DB = path.join(__dirname, '../db/db.json');
