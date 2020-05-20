const express = require("express");
const router = express.Router();
const uploadMulter = require("./_multer");
const Category = require("../models/category.model");
//
const cloudinary = require("./_cloudinary");
// const ControllerUpload = require("./_controller-Upload");
//

// CREATE CATEGORY
// var cpUpload = uploadMulter.array("imgCollection", 24);

var cpUpload = uploadMulter.fields([
  { name: "imgCollection", maxCount: 8 },
  { name: "imageUrl", maxCount: 8 },
]);

router.post("/save", cpUpload, async (req, res) => {
  const urls = [];
  const urls2 = [];

  const uploader = async (item) => await cloudinary.uploadMultiple(item);

  for (const file of req.files["imgCollection"]) {
    urls.push(await uploader(file.path));
  }
  for (const file of req.files["imageUrl"]) {
    urls2.push(await uploader(file.path));
  }

  const newCategory = new Category({
    name: req.body.name,
    imgCollection: urls,
    imageUrl: urls2,
  });

  newCategory
    .save()
    .then((result) => {
      res.json({
        message: "Category Added!",
        newCategory: result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

// UPDATE CATEGORY
router.put(
  "/update/:id",
  uploadMulter.array("imgCollection", 24),
  async (req, res) => {
    const urls = [];

    const uploader = async (path) => await cloudinary.uploads(path, "Images");
    const files = req.files;
    for (const file of files) {
      const { path } = file;
      const newPath = await uploader(path);
      urls.push(newPath);
    }

    var newUpdate = {
      name: req.body.name,
      imgCollection: urls,
    };

    Category.findByIdAndUpdate(
      req.params.id,
      newUpdate,
      { upsert: true },
      (err) => {
        if (err) {
          res.send(err);
        }
        res.json({ messaje: "Done" });
      }
    );
  }
);

//  GET CATEGORY BY ID
router.get("/:id", (req, res) => {
  Category.findById(req.params.id)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

// DELETE CATEGORY
router.delete("/:id", (req, res) => {
  Category.findByIdAndDelete(req.params.id)
    .then(() => res.json("Category deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

// GET CATEGORIS
router.get("/", (req, res) => {
  Category.find({})
    .then((data) => {
      console.log("Data: ", data);
      res.json(data);
    })
    .catch((err) => {
      console.log("error: ", err);
    });
});

module.exports = router;
