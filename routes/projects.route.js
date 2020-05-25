const express = require("express");
const router = express.Router();
const cloudinary = require("./_cloudinary");
const Project = require("../models/project.model");

// CREATE PROJECT
router.post("/save", (req, res) => {
  const newProject = new Project({
    name: req.body.name,
    description: req.body.description,
    thumbnail: req.body.thumbnail,
    hero: req.body.hero,
    category: req.body.category,
    imglist: req.body.imglist,
    videolist: req.body.videolist,
  });

  newProject
    .save()
    .then((result) => {
      res.json({
        message: "Project Added!",
        newCategory: result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

// UPDATE PROJECT
router.put("/update/:id", (req, res) => {
  var newUpdate = {
    name: req.body.name,
    description: req.body.description,
    thumbnail: req.body.thumbnail,
    hero: req.body.hero,
    category: req.body.category,
    imglist: req.body.imglist,
    videolist: req.body.videolist,
  };

  Project.findByIdAndUpdate(
    req.params.id,
    newUpdate,

    (err) => {
      if (err) res.send(err);
      res.json({ message: "Update Done" });
      cloudinary.clearCacheProject();
    }
  );
});

// GET PROJECTS
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

// GET PROJECT BY ID
router.get("/:id", (req, res) => {
  Project.findById(req.params.id)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

// DELETE PROJECT
router.delete("/:id", (req, res) => {
  cloudinary.clearCacheProject();
  Project.findByIdAndDelete(req.params.id)
    .then(() => res.json("Project deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
