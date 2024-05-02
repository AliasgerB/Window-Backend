const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/dataneuron")
  .then(() => {
    console.log("connection succsessful...");
  })
  .catch((e) => {
    console.log("no connection" + e);
  });
