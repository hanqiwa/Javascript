const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

mongoose.connect('mongodb+srv://API-shop:apishop@cluster0-8dwj1.mongodb.net/chat?retryWrites=true&w=majority')

const authRoutes = require('./routes/auth')
const chatRoutes = require('./routes/chat')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(authRoutes)
app.use(chatRoutes)

module.exports = app