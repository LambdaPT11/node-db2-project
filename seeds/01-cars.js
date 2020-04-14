
exports.seed = function(knex) {
  // Deletes ALL existing entries and reset id's
  return knex('cars-db').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars-db').insert([
        {car_make: 'Ford', car_model: 'escape', car_year: '1986', car_vin: '1HGBH41JXMN109186', car_mileage: '752153', trans_type: 'auto', title_status: 'clean', vehicle_notes: 'This one is moved to salvage.'},
        {car_make: 'Chevy', car_model: 'Camero', car_year: '1986', car_vin: '1HGBH41JXMN109183', car_mileage: '752853', trans_type: 'man', title_status: 'clean', vehicle_notes: 'High mileage but classic'},
        {car_make: 'Honda', car_model: 'Prelude', car_year: '1994', car_vin: '1HGBH41JXMN109120', car_mileage: '752920', trans_type: 'auto', title_status: 'clean', vehicle_notes: 'High mileage but classic'},
      ]);
    });
};
