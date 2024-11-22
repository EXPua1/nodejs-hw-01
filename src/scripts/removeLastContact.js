import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();
    if (contacts.length === 0) {
      console.log('Список контактов пуст');
      return;
    }

    // Выводим ID последнего контакта
    const lastContactId = contacts[contacts.length - 1].id;
    console.log('Контакты до удаления:', contacts);

    contacts.pop();
    await writeContacts(contacts);

    // Выводим ID удалённого контакта
    console.log(`Последний контакт с ID ${lastContactId} успешно удалён`);
  } catch (error) {
    console.error('Произошла ошибка в удалении контакта', error);
  }
};

removeLastContact();
