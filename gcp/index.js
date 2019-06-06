'use strict'
const { ApolloServer } = require('apollo-server-cloud-functions')
const { typeDefs, resolvers } = require('./lib/graphql')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
})

module.exports.graphql = server.createHandler()
