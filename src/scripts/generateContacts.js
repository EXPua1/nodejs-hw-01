import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    const contacts = await readContacts();

    const newContacts = [];

    // Генерируем новые контакты
    for (let i = 0; i < number; i++) {
      newContacts.push(createFakeContact());
    }

    // Добавляем новые контакты в существующий массив
    contacts.push(...newContacts);

    // Записываем обновленные данные в файл
    await writeContacts(contacts);
    console.log(`${newContacts.length} новых контактов добавлено.`);
  } catch (error) {
    console.error('Произошла ошибка:', error);
  }
};

generateContacts(5);
