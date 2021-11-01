const { User } = require('../models');

const userData = [
  {
    id: "1",
    username: "test1",
    email: "test1@gmail.com",
    password:"1234567"
  },
  {
    id: "2",
    username: "test2",
    email: "test2@gmail.com",
    password:"1234567"
  },
  {
    id: "3",
    username: "test3",
    email: "test3@gmail.com",
    password:"1234567"
  },
  {
    id: "4",
    username: "test4",
    email: "test4@gmail.com",
    password:"1234567"
  }
]

// bulkcreate
const seedUser = () => User.bulkCreate(userData, {
    // hooks
  individualHooks: true,
    returning: true,
});

// export
module.exports = seedUser;