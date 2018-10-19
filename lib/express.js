const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const { typeDefs, resolvers } = require('./graphql')

const server = new ApolloServer({ typeDefs, resolvers, introspection: true })

const app = express()
server.applyMiddleware({ app, path: '/' })

app.graphql = server

module.exports = app
