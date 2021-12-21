const express = require('express')
const Book = require('../models/book')

const BookRouter = express.Router()

BookRouter.get('/', (req, res, next) => {
    Book.find({})
        .then(books => res.json(books))
        .catch(next)
})

BookRouter.get('/:id', (req, res, next) => {
    Book.findById({_id: req.params.id})
        .then(books => res.json(books))
        // .then(() => res.redirect("/"))
        .catch(next)
})

// BookRouter.get('/', (req, res, next) => {
//     Book.find(req.query)
//         .then(books => res.json(books))
//         .catch(next)
// })

BookRouter.post('/', (req, res, next) => {
    Book.create(req.body)
    .then(() => res.redirect("/books"))
    .catch(next)
})

BookRouter.put('/:id', (req, res, next) => {
    Book.findOneAndUpdate({_id: req.params.id}, req.body, { new: true })
        // .then((book) => res.json(book))
        .then(() => res.redirect("/books")) // both of these work
        .catch(next)
})

BookRouter.delete('/:id', (req, res, next) => {
    Book.findOneAndDelete({_id: req.params.id})
        .then(() => res.redirect("/books"))
})

module.exports = BookRouter