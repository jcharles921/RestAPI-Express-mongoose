const mongoose = require("mongoose");

const schema = mongoose.Schema({
  title: String,
  content: String,
  date:String //having some modification to do
});

module.exports = mongoose.model("Post", schema);
