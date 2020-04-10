const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmailSchema = new Schema({
  email: String,
  date: {
    type: Date,
    default: Date.now()
  }
});

module.exports = Email = mongoose.model("Email", EmailSchema);
