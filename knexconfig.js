const knex = require("knex");

const knexConfig = {
    client: 'sqlite3',
        connection: {
            filename: "./data/cars.db3",
        },
        useNullAsDefault: true,
        seeds: {
            directory: "./data/seeds",
        },
};


module.exports = knex(knexConfig);