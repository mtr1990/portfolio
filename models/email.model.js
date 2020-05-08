const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmailSchema = new Schema(
  {
    email: String,
    date: Date,
  },
  { versionKey: false }
);

module.exports = Email = mongoose.model("Email", EmailSchema);
