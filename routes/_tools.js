const fs = require("fs");

function base64_encode(file) {
  var bitmap = fs.readFileSync(file);
  return Buffer.from(bitmap).toString("base64");
}

module.exports = {
  // CONVERT IMAGE TO BASE64
  imgToBase64: (fileType, filePath) => {
    return "data:" + fileType + ";base64," + base64_encode(filePath);
  },
};
