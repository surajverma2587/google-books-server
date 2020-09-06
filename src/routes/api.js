const express = require("express");
const axios = require("axios");

const db = require("../models");

const GOOGLE_URL = "https://www.googleapis.com/books/v1/volumes";

const apiRouter = express.Router();

const transformGoogleBooks = (googleBooks = []) => {
  return googleBooks.map((googleBook) => {
    return {
      title: googleBook.volumeInfo.title,
      subTitle: googleBook.volumeInfo.subTitle,
      description: googleBook.volumeInfo.description,
      authors: googleBook.volumeInfo.authors,
      image: googleBook.volumeInfo.imageLinks.thumbnail,
      link: googleBook.volumeInfo.previewLink,
    };
  });
};

const getBooksFromGoogle = async (req, res) => {
  try {
    const { searchTerm } = req.body;

    const { data } = await axios.get(GOOGLE_URL, { params: { q: searchTerm } });

    const books = transformGoogleBooks(data.items);

    res.json({
      results: books,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

apiRouter.post("/books", getBooksFromGoogle);

module.exports = apiRouter;
