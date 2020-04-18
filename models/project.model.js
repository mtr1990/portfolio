const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  name: String,
  description: String,
  thumbnail: String,
  hero: String,
  // category: {
  //   _id: { type: Object },s
  //   name: { type: String },
  //   date: {
  //     type: Date,
  //     default: Date.now(),
  //   },
  // },
  category: Object,
  imglist: Array,
  videolist: Array,
});

module.exports = Project = mongoose.model("Project", ProjectSchema);
