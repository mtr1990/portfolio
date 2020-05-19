const express = require("express");
const router = express.Router();
const User = require("../models/user.model");
const { validationResult } = require("express-validator");
const validate = require("./_validate");

// REGISTER
router.post("/register", validate.validateUserRegister, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.send({ errors: errors.mapped() });
  }
  const newUser = new User(req.body);
  newUser.password = newUser.hashPassword(newUser.password);
  newUser
    .save()
    .then((data) => {
      return res.json(data);
    })
    .catch((err) => res.send(err));
});

// LOGIN
router.post("/login", (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.send({ errors: errors.mapped() });
  }
  User.findOne({
    email: req.body.email,
  })
    .then((user) => {
      if (!user) {
        return res.send({ error: true, message: "User does not exist!" });
      }
      if (!user.comparePassword(req.body.password, user.password)) {
        return res.send({ error: true, message: "Wrong password!" });
      }
      req.session.user = user;
      req.session.isLoggedIn = true;
      return res.send({ message: "You are signed in" });
    })
    .catch((error) => {
      console.log(error);
    });
});

// GET USERS
router.get("/", (req, res) => {
  User.find({})
    .then((data) => {
      console.log("Data: ", data);
      res.json(data);
    })
    .catch((err) => {
      console.log("error: ", err);
    });
});

// DELETE USER
router.delete("/:id", (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json("User deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

// ISLOGIN
router.get("/isloggedin", (req, res) => {
  if (req.session.isLoggedIn) {
    res.send(true);
  } else {
    res.send(false);
  }
});

// LOGOUT
router.get("/logout", (req, res) => {
  req.session.destroy();
  res.send({ message: "Logged out!" });
});

module.exports = router;
