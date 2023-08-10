const fs = require('fs');

// Define the data for the JSON file
const data = [
  { name: 'John Doe', email: 'john.doe@example.com', age: 30 },
  { name: 'Jane Smith', email: 'jane.smith@example.com', age: 25 },
  { name: 'Bob Johnson', email: 'bob.johnson@example.com', age: 35 }
];

let seq = ""
data.forEach(d => {
 seq += `${d.name}${d.email}${d.age}`;
});

// Specify the JSON file path
const filePath = 'output.txt';

// Write the data to the JSON file
fs.writeFile(filePath, seq, (err) => {
  if (err) {
    console.error('Error generating Sequential file:', err);
  } else {
    console.log('Sequential file has been generated successfully.');
  }
});
