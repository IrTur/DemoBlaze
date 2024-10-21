import { faker } from '@faker-js/faker';

function generateUser() {
  const randomNumber = Math.random().toString().slice(2, 6);
  const username = faker.internet.userName() + '_' + randomNumber;
  const password = '12345Qwert!';

  return { password, username };
}

module.exports = { generateUser };