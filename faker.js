const faker = require('faker');

function generateWords(count) {
  const words = [];
  for (let i = 0; i < count; i++) {
    words.push(faker.lorem.word());
  }
  return words;
}

const numberOfWords = 10000;
const words = generateWords(numberOfWords);
console.log(words);
