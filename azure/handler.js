'use strict'
const createHandler = require('azure-function-express').createHandler
const app = require('./lib/express')

module.exports.express = createHandler(app)
