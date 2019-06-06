const { resolve } = require('path')
require('dotenv').config({ path: resolve(__dirname, '../.env') })

const app = require('../lib/express')

app.listen({ port: 4000 }, () => {
  console.log(
    `🚀 Server ready at http://localhost:4000${app.graphql.graphqlPath}`
  )
})
