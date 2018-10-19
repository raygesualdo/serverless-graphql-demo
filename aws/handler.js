'use strict'
const awsServerlessExpress = require('aws-serverless-express')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
const app = require('./lib/express')

app.use(awsServerlessExpressMiddleware.eventContext())
const server = awsServerlessExpress.createServer(app)

module.exports.express = (event, context) => {
  awsServerlessExpress.proxy(server, event, context)
}
