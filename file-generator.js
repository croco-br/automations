const fs = require("fs");

const writeStream = fs.createWriteStream("file.txt");

writeStream.on("error", function (err) {
   console.error("Error writing to file:", err);
});

const chunkSize = 1024 * 1024; // 1 MB
const totalChunks = Math.ceil(1073741824 / chunkSize);

writeStream.setMaxListeners(totalChunks + 1);

write();

function write() {
   let i = totalChunks;
   writeChunk();

   function writeChunk() {
      let canContinue = true;
      while (i > 0 && canContinue) {
         const chunk = "x".repeat(chunkSize) + '\n';
         canContinue = writeStream.write(chunk);
         i--;

         if (i === 0) {
            writeStream.end();
         } else if (!canContinue) {
            writeStream.once("drain", writeChunk);
         }
      }
   }
}

