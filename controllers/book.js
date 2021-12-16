const express = require('express')
const Book = require('../models/book')

const BookRouter = express.Router()

BookRouter.get('/', (req, res, next) => {
    Book.find({})
        .then(books => res.json(books))
        .catch(next)
})

module.exports = BookRouter