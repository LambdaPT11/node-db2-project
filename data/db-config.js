const knex = require('knex');

const configFile = require('../knexfile').development;

module.exports = knex(configFile);