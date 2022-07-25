const mongoose = require("mongoose");

const connectDB = (url) => {
  return mongoose.connect(url, () => {
    console.log("database connected");
  });
};

module.exports = connectDB;
