const mongoose = require("../db/connection");

const BookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    genre: String,
    isbn: Number,
    format: String,
    available: {
      type: Boolean,
      default: false,
    },
    description: String,
    Published: Number,
    copyright: Number,
    authors: [String],
    libraryLocation: String,
    shoppingLink: String,
    image: String,
  },
  { timestamps: true }
);

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;
