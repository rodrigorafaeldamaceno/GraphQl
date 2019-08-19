//define as resolvers ou 'rotas' da aplicação

const users = [
  { id: 1, name: 'Rodrigo Rafael', email: 'rodrigorafaeldamaceno@gmail.com' },
  { id: 2, name: 'Cleonice da maceno', email: 'cleonice@gmail.com' },
  { id: 3, name: 'Jair Dias de Souza', email: 'jair@gmail.com' }
]

module.exports = {
  Query: {
    users: () => users,
    user: (_, { id }) => users[id - 1]
  },
  Mutation: {
    createUser: (_, { name, email }) => {
      const user = { id: users.length + 1, name, email }
      users.push(user)
      return user
    }
  }

}



