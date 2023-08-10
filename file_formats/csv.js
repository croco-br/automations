const fs = require('fs');
const csv = require('csv-writer').createObjectCsvWriter;

// Define the data for the CSV file
const data = [
  { name: 'John Doe', email: 'john.doe@example.com', age: 30 },
  { name: 'Jane Smith', email: 'jane.smith@example.com', age: 25 },
  { name: 'Bob Johnson', email: 'bob.johnson@example.com', age: 35 }
];

// Specify the CSV file path and header
const csvWriter = csv({
  path: 'output.csv',
  header: [
    { id: 'name', title: 'Name' },
    { id: 'email', title: 'Email' },
    { id: 'age', title: 'Age' }
  ]
});

// Write the data to the CSV file
csvWriter.writeRecords(data)
  .then(() => console.log('CSV file has been generated successfully.'))
  .catch(err => console.error('Error generating CSV file:', err));
