const fs = require("fs");
const path = require("path");
const mongoUtil = require("./_connectDb");
const keywordUrl = "/upload";
const directoryUrl = "./client/public/upload";

function removeFile(result) {
  fs.readdir(directoryUrl, (err, files) => {
    if (err) throw err;
    files.forEach((file) => {
      const fileDir = path.join(directoryUrl, file);
      var found = false;
      result.forEach((file1) => {
        if (file === file1) {
          found = true;
        }
      });
      if (found === false) {
        fs.unlinkSync(fileDir);
      }
    });
  });
}

module.exports = {
  // CLEAR CACHE IMAGES CATEGORY
  cacheCategory: () => {
    mongoUtil.connectDb((err, db) => {
      if (err) console.log(err);
      var db = mongoUtil.getDb();
      db.collection("categories")
        .find({ "imgCollection.source": { $regex: keywordUrl } })
        .toArray((err, result) => {
          if (err) throw err;
          result = result.map((item) => {
            return item.imgCollection.map((item) => item.name);
          });
          result = [].concat(...result);
          removeFile(result);
        });
    });
  },
};

// function clearCache() {
//   mongoUtil.connectDb((err, db) => {
//     if (err) console.log(err);
//     var db = mongoUtil.getDb();
//     db.collection("categories")
//       .find({ "imgCollection.source": { $regex: "/portfolio/upload" } })
//       .toArray((err, result) => {
//         if (err) throw err;

//         result = result.map((item) => {
//           return item.imgCollection.map((item) => item.name);
//         });

//         result = [].concat(...result);

//         fs.readdir(directoryUrl, (err, files) => {
//           if (err) {
//             console.log(err);
//           }
//           console.log("files", files);
//           console.log("result", result);
//           console.log("===================");

//           files.forEach((file) => {
//             const fileDir = path.join(directoryUrl, file);
//             var found = false;
//             result.forEach((file1) => {
//               if (file === file1) {
//                 found = true;
//               }
//             });
//             if (found === false) {
//               fs.unlinkSync(fileDir);
//             }
//           });

//           console.log("files", files);
//           console.log("result", result);
//           console.log("===================");
//         });
//       });
//   });
// }
