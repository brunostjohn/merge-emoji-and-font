const fs = require("fs");
const path = require("path");
const child_process = require("child_process");

function create_emoji_svg(file) {
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
      "svg",
      file.slice(0, -4) + ".svg"
    )} -p 8 --colormode color -m pixel`,
    { stdio: "inherit" }
  );
}

if (fs.existsSync(path.join(__dirname, "build"))) {
  fs.rmSync(path.join(__dirname, "build"), {
    recursive: true,
    force: true,
  });
}

fs.mkdirSync(path.join(__dirname, "build"));
fs.mkdirSync(path.join(__dirname, "build", "svg"));

fs.readdirSync(path.join(__dirname, "apple-emoji-linux", "png", "160")).forEach(
  (file) => create_emoji_svg(file)
);
