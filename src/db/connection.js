const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("connection successful...");
  })
  .catch((e) => {
    console.log("no connection" + e);
  });
