const fs = require("fs");
const path = require("path");
const child_process = require("child_process");

if (fs.existsSync(path.join(__dirname, "build"))) {
  fs.rmSync(path.join(__dirname, "build"), {
    recursive: true,
    force: true,
  });
}

const svgs = fs.readdirSync(
  path.join(__dirname, "apple-emoji-linux", "png", "160")
);

const range = Math.ceil(svgs.length / 500);

fs.mkdirSync(path.join(__dirname, "build"));

for (let i = 0; i < range; i++) {
  fs.mkdirSync(path.join(__dirname, "build", "svg" + (i + 1)));
}

const folderLimit = Math.ceil(svgs.length / range);

let doneCounter = 0;
let currentFolder = 1;
let doneCounterForFolder = 0;

svgs.forEach((file) => {
  if (doneCounterForFolder >= folderLimit) {
    currentFolder++;
    doneCounterForFolder = 0;
  }

  process.stdout.clearLine();
  process.stdout.cursorTo(0);

  process.stdout.write(
    `[${doneCounter}/${svgs.length}] ${file}                  `
  );

  child_process.execSync(
    `vtracer --input ${path.join(
      __dirname,
      "apple-emoji-linux",
      "png",
      "160",
      file
    )} --output ${path.join(
      __dirname,
      "build",
      "svg" + currentFolder,
      file.slice(0, -4) + ".svg"
    )} -p 8 --colormode color -m pixel`
  );
  doneCounter++;
  doneCounterForFolder++;
});
