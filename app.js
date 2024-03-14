const express = require('express') // IMPORT EXPRESS
const morgan = require('morgan')
const path = require('path')

// INIT EXPRESS ROUTER
const app = express.Router()

// MIDDLEWARE
app.use(morgan('combined'))
app.use(express.static(path.join(__dirname, 'public')))

// EXPORT MODULE
module.exports = app
