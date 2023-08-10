const fs = require('fs');

// Define the data for the JSON file
const data = [
  { name: 'John Doe', email: 'john.doe@example.com', age: 30 },
  { name: 'Jane Smith', email: 'jane.smith@example.com', age: 25 },
  { name: 'Bob Johnson', email: 'bob.johnson@example.com', age: 35 }
];

// Convert the data to JSON format
const jsonData = JSON.stringify(data, null, 2);

// Specify the JSON file path
const filePath = 'output.json';

// Write the data to the JSON file
fs.writeFile(filePath, jsonData, (err) => {
  if (err) {
    console.error('Error generating JSON file:', err);
  } else {
    console.log('JSON file has been generated successfully.');
  }
});
