const mongoose = require("mongoose");

const initDB = () => {
  mongoose.connect(
    "mongodb+srv://<password>:krelo16@mflix-bktrv.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  );
  mongoose.connection.once("open", () => {
    console.log("connected to database");
  });
};

module.exports = initDB;
