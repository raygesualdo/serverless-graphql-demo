require('dotenv').config()
const { Author, Series, Book } = require('../lib/db')

const seed = async (author, series, books = []) => {
  // Create author
  const authorDoc =
    (await Author.findOne({ name: author.name })) ||
    (await Author.create(author))

  // Create series
  const seriesDoc =
    series &&
    ((await Series.findOne({ name: series.name })) ||
      (await Series.create(series)))

  // Bail if books already exist
  const titles = books.map(x => x.title)
  const existingBooks = await Book.find()
    .where('title')
    .in(titles)
    .exec()
  if (existingBooks.length > 0) return `Books exist for ${author.name}.`

  // Create books
  const preparedBooks = books.map(book => ({
    ...book,
    author: authorDoc._id,
    series: seriesDoc && seriesDoc._id,
  }))
  await Book.insertMany(preparedBooks)

  return `Seed complete for ${author.name}.`
}

Promise.all([
  // Seed LOTR
  seed({ name: 'J.R.R. Tolkien' }, { name: 'Lord of the Rings' }, [
    {
      title: 'The Lord of the Rings: The Fellowship of the Rings',
      publishDate: '29 July 1954',
      numberInSeries: 1,
    },
    {
      title: 'The Lord of the Rings: The Two Towers',
      publishDate: '11 November 1954',
      numberInSeries: 2,
    },
    {
      title: 'The Lord of the Rings: The Return of the King',
      publishDate: '20 October 1955',
      numberInSeries: 3,
    },
  ]),
  // Seed Jurassic Park
  seed({ name: 'Michael Crichton' }, null, [
    { title: 'Jurassic Park', publishDate: 'November 20, 1990' },
  ]),
  // Seed Harry Potter
  seed({ name: 'J.K. Rowling' }, { name: 'Harry Potter' }, [
    {
      title: "Harry Potter and the Philosopher's Stone",
      publishDate: '26 June 1997',
      numberInSeries: 1,
    },
    {
      title: 'Harry Potter and the Chamber of Secrets',
      publishDate: '2 July 1998',
      numberInSeries: 2,
    },
    {
      title: 'Harry Potter and the Prisoner of Azkaban',
      publishDate: '8 July 1999',
      numberInSeries: 3,
    },
    {
      title: 'Harry Potter and the Goblet of Fire',
      publishDate: '8 July 2000',
      numberInSeries: 4,
    },
    {
      title: 'Harry Potter and the Order of the Pheonix',
      publishDate: '21 June 2003',
      numberInSeries: 5,
    },
    {
      title: 'Harry Potter and the Half-blood Prince',
      publishDate: '16 July 2005',
      numberInSeries: 6,
    },
    {
      title: 'Harry Potter and the Deathly Hallows',
      publishDate: '21 July 2007',
      numberInSeries: 7,
    },
  ]),
]).then(results => {
  console.log(results)
  process.exit(0)
})
