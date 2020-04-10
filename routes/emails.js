const express = require("express");
const router = express.Router();
const Email = require("../models/email.model");

// Get List
router.get("/", (req, res) => {
  Email.find({})
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
  const newEmail = new Email(data);
  newEmail.save((error) => {
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
  Email.findByIdAndDelete(req.params.id)
    .then(() => res.json("Email deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
