const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategorySchema = new Schema(
  {
    name: String,
    imgCollection: Array,
    imageUrl: String,
  },
  { versionKey: false }
);

module.exports = Category = mongoose.model("Category", CategorySchema);
