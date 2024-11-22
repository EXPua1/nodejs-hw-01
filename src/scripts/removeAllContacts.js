import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    await writeContacts([]);
    console.log('Все контакты успешно удалены');
  } catch (error) {
    console.error('Произошла ошибка в удалении контактов', error);
  }
};

removeAllContacts();
