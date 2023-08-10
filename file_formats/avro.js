const fs = require('fs');
const avro = require('avro-js');

// Define the data for the Avro file
const data = {
    persons: [
      { name: 'John Doe', email: 'john.doe@example.com', age: 30 },
      { name: 'Jane Smith', email: 'jane.smith@example.com', age: 25 },
      { name: 'Bob Johnson', email: 'bob.johnson@example.com', age: 35 }
    ]
  };
  
// Define the Avro schema
const schema = {
  type: 'record',
  name: 'Person',
  fields: [
    { name: 'name', type: 'string' },
    { name: 'email', type: 'string' },
    { name: 'age', type: 'int' }
  ]
};

// Create Avro type from the schema
const avroType = avro.parse(schema);

// Serialize the data to Avro format
const avroBuffer = avroType.toBuffer(data);

// Specify the Avro file path
const filePath = 'output.avro';

// Write the Avro data to the file
fs.writeFile(filePath, avroBuffer, (err) => {
  if (err) {
    console.error('Error generating Avro file:', err);
  } else {
    console.log('Avro file has been generated successfully.');
  }
});

