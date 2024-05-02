const mongoose = require("mongoose");

const windowScheme = new mongoose.Schema({
  Content: {
    type: String,
    require: true,
  },
  Windowtype: {
    type: String,
  },
  Count: {
    type: Number,
  },
  Date: {
    type: Date,
    default: Date.now,
  },
});

const Windowmodel = new mongoose.model("Window", windowScheme);

module.exports = Windowmodel;
