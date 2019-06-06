const { resolve } = require('path')
require('dotenv').config({ path: resolve(__dirname, '../.env') })

const mongoose = require('../lib/db')

const drop = async () => {
  console.log('Dropping "library" database.')
  // "dropDatabase" doesn't seem to be returning correctly,
  // so set a timeout and assume the database was dropped
  await Promise.race([
    mongoose.connection.dropDatabase('library'),
    new Promise(cb => setTimeout(cb, 2500)),
  ])
  console.log('Dropped "library" database.')
  process.exit()
}

drop()
