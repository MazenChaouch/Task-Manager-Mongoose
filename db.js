const mongoose = require("mongoose");
const db = "taskDb";
const uri = `mongodb+srv://mchaouch007:mchaouch007@cluster0.qdtbh.mongodb.net/${db}`;

const connectToDb = () => {
  mongoose
    .connect(uri)
    .then(() => {
      console.log("connected!");
    })
    .catch(() => {
      console.log("error connecting!");
    });
};

module.exports = connectToDb;
