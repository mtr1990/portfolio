const express = require("express");
const router = express.Router();
const multer = require("./_multer");
const cloudinary = require("./_cloudinary");
const Category = require("../models/category.model");

// CREATE CATEGORY
const cpUpload = multer.array("imgCollection", 24);
const uploader = async (item) => await cloudinary.uploadMultiple(item);

router.post("/save", cpUpload, async (req, res) => {
  let fliesUpLoad = [];
  const filesimgCollection = req.files;
  for (const file of filesimgCollection) {
    fliesUpLoad.push(await uploader(file.path));
  }

  const newCategory = new Category({
    name: req.body.name,
    imgCollection: fliesUpLoad,
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
router.put("/update/:id", cpUpload, async (req, res) => {
  let fliesUpLoad = [];
  const filesimgCollection = req.files;
  for (const file of filesimgCollection) {
    fliesUpLoad.push(await uploader(file.path));
  }

  var newUpdate = {
    name: req.body.name,
    imgCollection: fliesUpLoad,
  };

  Category.findByIdAndUpdate(
    req.params.id,
    newUpdate,

    (err) => {
      if (err) res.send(err);
      res.json({ message: "Update Done" });
      cloudinary.clearCacheCategory();
    }
  );
});

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
  cloudinary.clearCacheCategory();
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
