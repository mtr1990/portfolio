const cloudinary = require("cloudinary").v2;
const dotenv = require("dotenv");
const tools = require("./_tools");
const mongodb = require("./_mongodb");
const keywordUrl = "upload_portfolio/";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_ID,
  api_secret: process.env.API_SECRET,
});

var self = (module.exports = {
  // UPLOAD CLOUDINARY
  uploadMultiple: (file) => {
    return new Promise((resolve) => {
      cloudinary.uploader
        .upload(file, {
          folder: "upload_portfolio",
        })
        .then((result) => {
          if (result) {
            resolve({
              public_id: result.public_id,
              originalname: result.original_filename.substring(37),
              url: result.url,
              size: result.bytes,
              type: result.resource_type + "/" + result.format,
              b64: tools.imgToBase64(
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

  // DESTROY CLOUDINARY
  destroyCloudinary: (removeArray) => {
    cloudinary.api.delete_resources(removeArray, (error, result) => {
      if (result) {
        console.log("Destroy result:", result);
      }
      if (error) {
        console.log("Destroy error:", error);
      }
    });
  },

  // GET CLOUDINARY
  getCloudinary: (dataMongodb) => {
    cloudinary.api.resources(
      {
        type: "upload",
        prefix: "upload_portfolio/",
      },
      (error, result) => {
        let dataCloudinary = result.resources;
        dataCloudinary = dataCloudinary.map((item) => {
          return item.public_id;
        });

        const removeArray = dataCloudinary
          .filter((x) => !dataMongodb.includes(x))
          .concat(dataMongodb.filter((x) => !dataCloudinary.includes(x)));

        if (removeArray.length > 0) self.destroyCloudinary(removeArray);
        // console.log("dataCloudinary:", dataCloudinary.length);
        // console.log("dataMongodb", dataMongodb.length);
        // console.log("removeArray", removeArray.length);
      }
    );
  },

  // CLEAR CACHE IMAGES CATEGORY
  clearCacheCategory: () => {
    mongodb.connectDb((err, db) => {
      if (err) console.log(err);
      var db = mongodb.getDb();
      db.collection("categories")
        .find({ "imgCollection.public_id": { $regex: keywordUrl } })
        .toArray((err, result) => {
          if (err) throw err;
          result = result.map((item) => {
            return item.imgCollection.map((item) => item.public_id);
          });
          result = [].concat(...result);
          self.getCloudinary(result);
        });
    });
  },
});
