const cloudinary = require("cloudinary").v2;
const dotenv = require("dotenv");
const tools = require("./_tools");

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_ID,
  api_secret: process.env.API_SECRET,
});

module.exports = {
  uploadMultiple: (file) => {
    return new Promise((resolve) => {
      cloudinary.uploader
        .upload(file, {
          folder: "upload_portfolio",
        })
        .then((result) => {
          if (result) {
            resolve({
              asset_id: result.asset_id,
              originalname: result.original_filename.substring(37),
              url: result.url,
              size: result.bytes,
              type: result.resource_type + "/" + result.format,
              b64: tools.base64(
                result.resource_type + "/" + result.format,
                file
              ),
              options: {
                type: "local",
              },
            });
            const fs = require("fs");
            fs.unlinkSync(file);
          }
        });
    });
  },
};
