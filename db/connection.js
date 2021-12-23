const mongoose = require('mongoose')

const dbName = "library"

const mongoURI = process.env.NODE_ENV === 'production'
    ? process.env.DB_URL
    : 'mongodb://localhost/' + dbName

mongoose.connect(mongoURI)
    .then(instance => console.log("I am connected to DB: " + instance.connections[0].name))
    .catch(err => console.log("My connection failed: ", err))

module.exports = mongoose