const mongoose = require("mongoose");
// "mongodb+srv://rahuljainkgk:A6DVldfcOs1ahyB1@cluster0.cei7xy2.mongodb.net/aliDb"

mongoose
  .connect(
    "mongodb+srv://bagaliasger53:swo6nEZvJODQinv9@cluster0.q3eb7yv.mongodb.net/testthird?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("connection successful...");
  })
  .catch((e) => {
    console.log("no connection" + e);
  });
