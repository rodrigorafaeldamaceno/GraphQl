//define as resolvers ou 'rotas' da aplicação
const User = require('../model/User')

module.exports = {
  Query: {
    users: () => User.find(),
    user: (_, { id }) => User.findById(id)
  },
  Mutation: {
    createUser: (_, { name, email, age }) => User.create({ name, email, age })
  }
}


