const mongoose = require('mongoose')

const { Schema } = mongoose

mongoose.connect(
  process.env.MONGO_URL,
  { dbName: 'library', useNewUrlParser: true }
)

const AuthorSchema = new Schema({
  name: String,
})
AuthorSchema.set('toObject', { getters: true })

const SeriesSchema = new Schema({
  name: String,
})
SeriesSchema.set('toObject', { getters: true })

const BookSchema = new Schema({
  title: String,
  publishDate: String,
  author: Schema.Types.ObjectId,
  series: Schema.Types.ObjectId,
  numberInSeries: Number,
})
BookSchema.set('toObject', { getters: true })

if (!mongoose.models.Author) mongoose.model('Author', AuthorSchema)
if (!mongoose.models.Series) mongoose.model('Series', SeriesSchema)
if (!mongoose.models.Book) mongoose.model('Book', BookSchema)

module.exports = mongoose
