const fs = require("fs");

function base64_encode(file) {
  var bitmap = fs.readFileSync(file);
  return Buffer.from(bitmap).toString("base64");
}

module.exports = {
  // convert image to base64
  base64: (fileType, filePath) => {
    return "data:" + fileType + ";base64," + base64_encode(filePath);
  },
};
