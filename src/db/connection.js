const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://rahuljainkgk:A6DVldfcOs1ahyB1@cluster0.cei7xy2.mongodb.net/aliDb"
  )
  .then(() => {
    console.log("connection succsessful...");
  })
  .catch((e) => {
    console.log("no connection" + e);
  });
