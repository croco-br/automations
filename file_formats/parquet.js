const fs = require('fs');


// Define the data for the Parquet file
const data = [
  { name: 'John Doe', email: 'john.doe@example.com', age: 30 },
  { name: 'Jane Smith', email: 'jane.smith@example.com', age: 25 },
  { name: 'Bob Johnson', email: 'bob.johnson@example.com', age: 35 }
];

const parquet = require('node-parquet');

const schema = new parquet.ParquetSchema({
  name: { type: 'UTF8' },
  email: { type: 'UTF8' },
  age: { type: 'INT32' }
});

const writer = await parquet.ParquetWriter.openFile(schema, 'output.parquet');
writer.setRowGroupSize(100);

for (const d of data) {
  writer.appendRow(d);
}

await writer.close();
console.log('Parquet file has been generated successfully.');
