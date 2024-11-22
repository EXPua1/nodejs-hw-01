import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const contacts = await readContacts();
    contacts.push(createFakeContact());
    await writeContacts(contacts);
    console.log('Контакт успешно добавлен');
  } catch (error) {
    console.error('Произошла ошибка в добавлении контакта', error);
  }
};

addOneContact();
