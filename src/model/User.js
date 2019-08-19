const mongoose = require('../database/database')

const userScheme = new mongoose.Schema({
    name: String,
    email: String
})

module.exports = mongoose.model('User', userScheme)