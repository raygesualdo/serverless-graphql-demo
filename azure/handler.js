'use strict'
const { ApolloServer } = require('apollo-server-azure-functions')
const { typeDefs, resolvers } = require('./lib/graphql')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
})

module.exports.graphql = server.createHandler()
