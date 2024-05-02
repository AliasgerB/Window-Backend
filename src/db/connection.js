const mongoose = require("mongoose");
//mongodb+srv://bagaliasger53:Ali@1409@cluster0.vqhmem6.mongodb.net/AliDB

//mongodb+srv://rahuljainkgk:A6DVldfcOs1ahyB1@cluster0.cei7xy2.mongodb.net/
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
