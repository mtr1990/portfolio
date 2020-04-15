const express = require("express");
const router = express.Router();
const Category = require("../models/category.model");

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

// CREATE CATEGORY
router.post("/save", (req, res) => {
  const data = req.body;
  const newCategory = new Category(data);
  newCategory.save((error) => {
    if (error) {
      res.status(500).json({ msg: "Sorry, internal server errors" });
      return;
    }
    return res.json({
      msg: "Your data has been saved!!!!!!",
    });
  });
});

// DELETE CATEGORY
router.delete("/:id", (req, res) => {
  Category.findByIdAndDelete(req.params.id)
    .then(() => res.json("Category deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

//  GET CATEGORY BY ID
router.get("/:id", (req, res) => {
  Category.findById(req.params.id)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

// UPDATE CATEGORY
router.put("/update/:id", (req, res) => {
  Category.findById(req.params.id)
    .then((item) => {
      item.name = req.body.name;
      item
        .save()
        .then(() => res.json("item updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
