const express = require("express");
const router = express.Router();
const Project = require("../models/project.model");

// Get List
router.get("/", (req, res) => {
  Project.find({})
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
  const newProject = new Project(data);
  newProject.save((error) => {
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
  Project.findByIdAndDelete(req.params.id)
    .then(() => res.json("Project deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

//  Get Item Id
router.get("/:id", (req, res) => {
  Project.findById(req.params.id)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

// Update Item
router.put("/update/:id", (req, res) => {
  Project.findById(req.params.id)
    .then((item) => {
      item.name = req.body.name;
      item.description = req.body.description;
      item.thumbnail = req.body.thumbnail;
      item.hero = req.body.hero;
      item.category = req.body.category;
      item.imglist = req.body.imglist;
      item.videolist = req.body.videolist;
      item
        .save()
        .then(() => res.json("item updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
