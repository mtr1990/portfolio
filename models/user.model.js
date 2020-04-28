const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

var UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

UserSchema.methods.hashPassword = function (password) {
  return bcrypt.hashSync(password, 12);
};
UserSchema.methods.comparePassword = function (password, hashedPassword) {
  return bcrypt.compareSync(password, hashedPassword);
};

module.exports = User = mongoose.model("User", UserSchema);
