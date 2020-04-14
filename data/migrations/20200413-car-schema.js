exports.up = function(knex) {
    return knex.schema.createTable('cars', function(cars) {
        cars.increments();

        cars.string('Car Make', 1024).notNullable();
        cars.string('Car Model', 1024).notNullable();
        cars.string('Car Year', 4).notNullable();
        cars.string('Car VIN', 17).notNullable();
        cars.string('Car Mileage', 9999999).notNullable();

        cars.string('Trans Type', 1024);
        cars.string('Title Status', 256);

        cars.text('Vehicle Notes');

        cars.timestamps(true, true);
    });
}