const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  name: String,
  description: String,
  thumbnail: String,
  hero: String,
  category: String,
  imglist: Array,
  videolist: Array
});

module.exports = Project = mongoose.model("Project", ProjectSchema);
