const { exec } = require("child_process");
const start = Date.now();

exec("sha256sum file.txt", (err, stdout, stderr) => {
    const end = Date.now();
    console.log(`Execution time: ${end - start} ms`);
});


