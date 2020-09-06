const express = require("express");

const db = require("../models");

const apiRouter = express.Router();

const getAllBooks = async (req, res) => {
  const books = await db.Book.find({});
  res.json({
    results: books,
  });
};

apiRouter.get("/books", getAllBooks);

module.exports = apiRouter;
