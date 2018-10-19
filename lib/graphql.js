const { resolve } = require('path')
const { importSchema } = require('graphql-import')
const {
  getAuthorById,
  getAllBooks,
  getBooksByAuthorId,
  getBooksBySeriesId,
  getSeriesById,
  getSeriesByName,
} = require('./services')

const typeDefs = importSchema(resolve(__dirname, './schema.graphql'))

const resolvers = {
  Query: {
    author: (_, { id }) => getAuthorById(id),
    books: () => getAllBooks(),
    series: (_, { name }) => getSeriesByName(name),
  },
  Author: {
    books: parent => getBooksByAuthorId(parent.id),
  },
  Book: {
    author: parent => getAuthorById(parent.author),
    series: parent => getSeriesById(parent.series),
  },
  Series: {
    books: parent => getBooksBySeriesId(parent.id),
  },
}

module.exports = {
  typeDefs,
  resolvers,
}
