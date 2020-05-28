const cloudinary = require("cloudinary").v2;
const mongodb = require("./_mongodb");
const rootUrl = "upload_portfolio/";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_ID,
  api_secret: process.env.API_SECRET,
});

var self = (module.exports = {
  // DELETE CLOUDINARY
  deleteCloudinary: (removeArray) => {
    cloudinary.api.delete_resources(removeArray, (error, result) => {
      if (error) {
        console.log("Destroy error:", error);
      }
    });
  },

  // GET CLOUDINARY
  getCloudinary: (dataMongodb, subfolder) => {
    cloudinary.api.resources(
      {
        type: "upload",
        max_results: 500,
        prefix: rootUrl + subfolder,
      },
      (error, result) => {
        if (error) console.log("Get Cloudinary:", error);
        let dataCloudinary = result.resources;

        dataCloudinary = dataCloudinary.map((item) => {
          return item.public_id;
        });

        const removeArray = dataCloudinary
          .filter((x) => !dataMongodb.includes(x))
          .concat(dataMongodb.filter((x) => !dataCloudinary.includes(x)));

        if (removeArray.length > 0) self.deleteCloudinary(removeArray);
        console.log("dataCloudinary:", dataCloudinary.length);
        console.log("dataMongodb", dataMongodb.length);
        console.log("removeArray", removeArray.length);
      }
    );
  },

  // CLEAR CACHE IMAGES CATEGORY
  clearCacheCategory: () => {
    mongodb.connectDb((err, db) => {
      if (err) console.log(err);
      var db = mongodb.getDb();
      db.collection("categories")
        .find({})
        .toArray((err, result) => {
          if (err) throw err;
          result = result.map((item) => {
            return item.imgCollection.map((item) => item.public_id);
          });

          result = [].concat(...result);
          self.getCloudinary(result, "categories");
        });
    });
  },

  // CLEAR CACHE IMAGES CATEGORY
  clearCacheProject: () => {
    mongodb.connectDb((err, db) => {
      if (err) console.log(err);
      var db = mongodb.getDb();
      db.collection("projects")
        .find({})
        .toArray((err, result) => {
          if (err) throw err;
          result = result.map((item) => {
            return [
              item.thumbnail.map((item) => item.public_id),
              item.hero.map((item) => item.public_id),
              item.imglist.map((item) => item.public_id),
            ];
          });

          result = [].concat(...result);
          result = [].concat(...result);

          self.getCloudinary(result, "projects");
        });
    });
  },
});
