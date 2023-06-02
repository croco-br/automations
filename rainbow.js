const crypto = require('crypto');

function generateRainbowTable(startingString, chainLength, totalChains) {
  const rainbowTable = {};

  for (let i = 0; i < totalChains; i++) {
    let currentString = startingString;

    for (let j = 0; j < chainLength; j++) {
      const hash = crypto.createHash('md5').update(currentString).digest('hex');
      const reducedString = hash.substr(0, 8); // Extract first 8 characters as the reduced string

      if (j === chainLength - 1) {
        rainbowTable[reducedString] = currentString; // Store the last string in the chain with its reduced form
      }

      currentString = hash;
    }
  }

  return rainbowTable;
}

// Example usage
const startingString = '123456';
const chainLength = 1000;
const totalChains = 10000;

const rainbowTable = generateRainbowTable(startingString, chainLength, totalChains);

console.log(rainbowTable);
