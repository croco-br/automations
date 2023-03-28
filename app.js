const { exec } = require("child_process");
const fs = require("fs");
const content = new Date().toLocaleString().concat("\n");
const time = new Date().toLocaleString();
const fileName = "date.txt";
const message = "auto"

fs.appendFile(fileName, content, (cb) => {
  exec("git add ".concat(fileName), (err, stdout, stderr) => {
    exec("git commit -m ".concat(message), (err, stdout, stderr) => {
      exec("git push main", (err, stdout, stderr) => {
        exec("git status", (err, stdout, stderr) => {
          console.log(stdout);
        });
      });
    });
  });
});
