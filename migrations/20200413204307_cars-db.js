
exports.up = function(knex) {
  // create cars db table
  return knex.schema.createTable('cars-db', tbl => {
    tbl.increments();

    tbl.string('car_make', 255).notNullable();
    tbl.string('car_model', 255).notNullable();
    tbl.string('car_year', 4).notNullable();
    tbl.text('car_vin', 17).unique().notNullable();
    tbl.string('car_mileage', 9999999).notNullable();

    tbl.string('trans_type', 1024);
    tbl.string('title_status', 256);

    tbl.text('vehicle_notes');

    tbl.timestamps(true);
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars-db');
};
