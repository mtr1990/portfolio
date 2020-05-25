const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectSchema = new Schema(
  {
    name: String,
    description: String,
    thumbnail: Array,
    hero: Array,
    // category: Object,
    category: String,
    imglist: Array,
    videolist: Array,
  },
  { versionKey: false }
);

module.exports = Project = mongoose.model("Project", ProjectSchema);
