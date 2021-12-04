const { ApolloServer } = require('apollo-server')
const { db } = require('./data/db')
const { Category } = require('./resolvers/Category')
const { Product } = require('./resolvers/Product')
const { Query } = require('./resolvers/Query')
const { Mutation } = require('./resolvers/Mutation')
const { typeDefs } = require('./Schema/schema')
const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Product,
    Category,
    Mutation,
  },
  context: {
    db,
  },
})

server.listen().then(({ url }) => {
  console.log(url)
})
