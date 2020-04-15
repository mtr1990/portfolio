const { check } = require("express-validator");

// User Register
exports.validateUserRegister = [
  check("email").custom((value) => {
    return User.findOne({ email: value }).then(function (user) {
      if (user) {
        throw new Error("This email is already in use");
      }
    });
  }),
];
