'use strict'
const { ApolloServer } = require('apollo-server-lambda')
const { typeDefs, resolvers } = require('./lib/graphql')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
})
const handler = server.createHandler()

module.exports.graphql = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false

  if (event.requestContext && event.requestContext.path) {
    event.path = event.requestContext.path
  }

  return handler(event, context, callback)
}
