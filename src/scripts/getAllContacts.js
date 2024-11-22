import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const contacts = await readContacts();

    return contacts;
  } catch (error) {
    console.error('Произошла ошибка в чтении контактов', error);
  }
};

console.log(await getAllContacts());
