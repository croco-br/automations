const crypto = require('crypto');
const fs = require('fs');

function breakMD5(targetHash, wordlist) {
  const words = fs.readFileSync(wordlist, 'utf8').split('\n');
  
  for (let i = 0; i < words.length; i++) {
    const word = words[i].trim();
    const hashedWord = crypto.createHash('md5').update(word).digest('hex');
    
    if (hashedWord === targetHash) {
      return `Password cracked! The original password is: ${word}`;
    }
  }

  return 'Password not found. Try a different wordlist or enhance your hacking skills!';
}

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the MD5 hash to crack: ', (targetHash) => {
  rl.question('Enter the path to the wordlist file: ', (wordlist) => {
    const result = breakMD5(targetHash, wordlist);
    console.log(result);
    rl.close();
  });
});
