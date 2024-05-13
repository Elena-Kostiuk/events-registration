const express = require('express')
const router = require('./routes')

const app = express()
const bodyParser = express.json

app.use(bodyParser)
app.use('./app',router)

module.exports = app