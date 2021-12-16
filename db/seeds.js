const Book = require('../models/book')

const seedData = require('./book-seeds.json')

Book.deleteMany({})
    .then(() => Book.insertMany(seedData))
    .then(console.log)
    .catch(console.error)
    .finally(() => process.exit())