const fs = require('fs');
const crypto = require('crypto');

function hashWords(words) {
  const hashedWords = [];
  words.forEach((word) => {
    const hash = crypto.createHash('md5').update(word).digest('hex');
    hashedWords.push(hash);
  });
  return hashedWords;
}

const filename = 'senhas.txt';

fs.readFile(filename, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
  } else {
    const words = data.split('\n');
    const hashedWords = hashWords(words);
    console.log(hashedWords);
  }
});
