const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const schema = new Schema({});

const Book = mongoose.model("Book", schema);

module.exports = Book;
