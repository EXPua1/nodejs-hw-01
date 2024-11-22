import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const readContacts = async () => {
  try {
    // Чтение файла как строки (UTF-8)
    const data = await fs.readFile(PATH_DB, 'utf-8');

    // Парсим данные как JSON
    const contacts = JSON.parse(data);

    return contacts;
  } catch (error) {
    // Обработка ошибок: выводим сообщение об ошибке и возвращаем пустой массив
    console.error('Ошибка при чтении файла:', error.message);
    return []; // Возвращаем пустой массив в случае ошибки
  }
};

readContacts();
