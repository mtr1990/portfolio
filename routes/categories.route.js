const express = require("express");
const router = express.Router();
const tools = require("./_tools");
const upload = require("./_upload");
const clearCache = require("./_clear-cache");
const Category = require("../models/category.model");

function pushFile(array, reqFiles) {
  array &&
    array.map((item) => {
      return reqFiles.push({
        originalname: item.originalname,
        name: item.filename,
        source: "/portfolio/upload/" + item.filename,
        size: item.size,
        type: item.mimetype,
        b64: tools.base64(item.mimetype, item.path),
        options: {
          type: "local",
        },
      });
    });
}

// CREATE CATEGORY
router.post("/save", upload.array("imgCollection", 24), (req, res, next) => {
  let reqFiles = [];
  pushFile(req.files, reqFiles);

  const newCategory = new Category({
    name: req.body.name,
    imgCollection: reqFiles,
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
  upload.array("imgCollection", 24),
  (req, res, next) => {
    let reqFiles = [];
    pushFile(req.files, reqFiles);

    var newUpdate = {
      name: req.body.name,
      imgCollection: reqFiles,
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
        clearCache.cacheCategory();
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
