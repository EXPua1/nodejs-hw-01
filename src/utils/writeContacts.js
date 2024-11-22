import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
  try {
    const data = JSON.stringify(updatedContacts, null, 2); // Плоская структура данных
    await fs.writeFile(PATH_DB, data, 'utf-8');
  } catch (error) {
    console.log('Ошибка при записи файла:', error.message);
  }
};
