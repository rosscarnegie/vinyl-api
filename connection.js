const mongoose = require('mongoose')

// this is what creates or connects to a database
mongoose.connect("mongodb://127.0.0.1/vinyl-api")

module.exports = mongoose