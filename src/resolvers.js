//define as resolvers ou 'rotas' da aplicação

const users = [
  { id: 1, name: 'Rodrigo Rafael', email: 'rodrigorafaeldamaceno@gmail.com' },
  { id: 2, name: 'Cleonice da maceno', email: 'cleonice@gmail.com' },
  { id: 3, name: 'Jair Dias de Souza', email: 'jair@gmail.com' }
]

console.log(users)


module.exports = {
  Query: {
    users: () => users,
    user: () => users[0]
  },
  Mutation: {
    createUser: () => users[0]
  }
}