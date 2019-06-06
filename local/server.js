const { resolve } = require('path')
require('dotenv').config({ path: resolve(__dirname, '../.env') })

const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const { typeDefs, resolvers } = require('../lib/graphql')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
  tracing: true,
})

const app = express()
server.applyMiddleware({ app, path: '/' })

app.graphql = server

app.listen({ port: 4000 }, () => {
  console.log(
    `🚀 Server ready at http://localhost:4000${app.graphql.graphqlPath}`
  )
})
