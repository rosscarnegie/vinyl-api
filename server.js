require('dotenv').config()
const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const vinylsController = require('./controllers/vinylsControllers')

const PORT = process.env.PORT

const app = express()
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(logger('dev'));
app.use(cors())

app.use('/vinyls', vinylsController)

app.set("port", process.env.PORT || 8000);


app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});

app.listen(PORT, () => {
    console.log(`Listening in on port: ${PORT}`)
})