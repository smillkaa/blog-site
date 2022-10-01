const { User } = require('../models')

const userData = [
    {
        username: 'User1',
        email: 'User1@email.com',
        password: 'User1pw'
    },
    {
        username: 'User2',
        email: 'User2@email.com',
        password: 'User2pw'
    }
]
// creates the data in the user table, the individualHooks will hash the password when the user is created
const seedUser = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUser