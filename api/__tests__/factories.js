const { factory } = require('factory-girl');
const { user } = require('../src/app/models');
const { adsense } = require('../src/app/models');
// const {faker} = require('faker');
const faker = require('faker');

factory.define('user', user, {
  name: faker.name.findName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  green_coins: "0",
  orange_coins: "0",
  birth_date: "00/00/00",
  work: "programador"
})
factory.define('adsense', adsense, {
  type:   "learnTolear",
  learn:  "Java",
  teach:  "Go",
  user_id:""
})

module.exports = factory