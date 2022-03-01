require('dotenv').config()
const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const vinylsController = require('./controllers/vinylsControllers')

const PORT = process.env.PORT

const app = express()
app.use(logger('dev'));
app.use(cors())

app.use('/vinyls', vinylsController)

app.listen(PORT, () => {
    console.log(`Listening in on port: ${PORT}`)
})