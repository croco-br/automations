const { PDFDocument } = require('pdf-lib');
const fs = require('fs');

async function extractPages(inputPath, startPage, endPage, outputPath) {
  const inputPdf = await PDFDocument.load(await fs.readFileSync(inputPath));
  const outputPdf = await PDFDocument.create();
  let numbers = [];
  for (let i = startPage; i <= endPage; i++) {
    numbers.push(i);
  }

  await outputPdf.copyPages(inputPdf, numbers);
  console.log(outputPdf)
  outputPdf.getPages().forEach(page => {
    console.log(page)
    outputPdf.drawPage(page)
  });

  const outputPdfBytes = await outputPdf.save();
  await fs.writeFile(outputPath, outputPdfBytes);

  const end = Date.now();
  console.log(`Execution time: ${end - start} ms`);
}




const start = Date.now();
extractPages('raft.pdf', 1, 2, 'output.pdf');




