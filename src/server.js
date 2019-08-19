const { GraphQLServer } = require('graphql-yoga')
const path = require('path')
const resolvers = require('./controllers/resolversArray')

const server = new GraphQLServer({
  typeDefs: path.resolve(__dirname, 'schema.graphql'),
  resolvers: resolvers
})

server.start()