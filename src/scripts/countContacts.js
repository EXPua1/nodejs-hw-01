import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const contacts = await readContacts();
    console.log('Количество контактов:', contacts.length);
    return contacts.length;
  } catch (error) {
    console.error('Произошла ошибка:', error);
  }
};

console.log(await countContacts());
