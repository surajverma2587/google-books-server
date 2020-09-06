const mongoose = require("mongoose");

const db = require("../models");
const { DB_URI, MONGOOSE_OPTIONS } = require("./config");

mongoose.connect(DB_URI, MONGOOSE_OPTIONS);

const books = [];

db.Book.deleteMany({})
  .then(() => db.Book.collection.insertMany(books))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
