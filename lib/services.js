const mongoose = require('./db')

const { Author, Series, Book } = mongoose.models

const getAuthorById = id => Author.findById(id).exec()

const getAllBooks = () => Book.find({}).exec()

const getBooksBySeriesId = id => Book.find({ series: id }).exec()

const getBooksByAuthorId = id => Book.find({ author: id }).exec()

const getSeriesById = id => Series.findById(id).exec()

const getSeriesByName = name => Series.findOne({ name }).exec()

module.exports = {
  getAuthorById,
  getAllBooks,
  getBooksByAuthorId,
  getBooksBySeriesId,
  getSeriesById,
  getSeriesByName,
}
