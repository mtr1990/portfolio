const express = require("express");
const router = express.Router();
const Category = require("../models/category.model");

// Get List
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

// Create Item
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

// Delete Item
router.delete("/:id", (req, res) => {
  Category.findByIdAndDelete(req.params.id)
    .then(() => res.json("Category deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

//  Get Item Id
router.get("/:id", (req, res) => {
  Category.findById(req.params.id)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

// Update Item
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
