const express = require("express");
const router = express.Router();
const cloudinary = require("./_cloudinary");
const Category = require("../models/category.model");

// CREATE CATEGORY
router.post("/save", async (req, res) => {
  const newCategory = new Category({
    name: req.body.name,
    imgCollection: req.body.imgCollection,
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
router.put("/update/:id", (req, res) => {
  var newUpdate = {
    name: req.body.name,
    imgCollection: req.body.imgCollection,
  };

  Category.findByIdAndUpdate(req.params.id, newUpdate, (err) => {
    if (err) res.send(err);
    res.json({ message: "Update Done" });
    cloudinary.clearCacheCategory();
  });
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

module.exports = router;
