const cloudinary = require("./_cloudinary");

module.exports = {
  uploadMultipleFiles: async (req, res, arrImg) => {
    //req.files chính là khi upload multiple images
    let res_promises = req.files.map(
      (file) =>
        new Promise((resolve, reject) => {
          cloudinary.uploadMultiple(file.path).then((result) => {
            resolve(result);
          });
        })
    );

    // Promise.all get imgas
    Promise.all(res_promises)
      .then(async (arrImg) => {
        //arrImg chính là array mà chúng ta đã upload
        // các bạn có thể sử dụng arrImg để save vào database, hay hơn thì sử dụng mongodb
        res.json(req.files);
      })
      .catch((error) => {
        console.error("> Error>", error);
      });
  },
};
