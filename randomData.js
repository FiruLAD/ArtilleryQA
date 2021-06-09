'use strict';

module.exports = {
  RandomData
};

const Faker = require('faker');

function RandomData(userContext, events, done) {
  const contentTask = `${Faker.lorem.sentence()} ` + `content message`;
  const updateMessage = `${Faker.lorem.sentence()} ` + `updated message`;
  userContext.vars.contentTask = contentTask;
  userContext.vars.updateMessage = updateMessage;
  return done();
}