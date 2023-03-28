const { exec } = require("child_process");
const fs = require("fs");
const time = new Date().toLocaleString();
const fileName = "date.txt";
const message = "message: ".concat(time);

fs.writeFile(fileName, time, (cb) => {
  exec("git status", (err, stdout, stderr) => {
    console.log(stdout);
    exec("git add ".concat(fileName), (err, stdout, stderr) => {
      console.log(stdout);
      exec("git commit -m ".concat(message), (err, stdout, stderr) => {
        console.log(stdout);
      });
    });
  });
});
