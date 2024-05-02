const mongoose = require("mongoose");
require("dotenv").config();
// "mongodb+srv://rahuljainkgk:A6DVldfcOs1ahyB1@cluster0.cei7xy2.mongodb.net/aliDb"

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("connection successful...");
  })
  .catch((e) => {
    console.log("no connection" + e);
  });
