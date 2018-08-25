
exports.up = function(knex, Promise) {
    return Promise.all([
		knex.schema.createTable('challenges', function(table){
			table.increments('id').primary();
			table.string('name');
			table.text('description');
			table.integer('points');
			table.integer('time');
			table.integer('distance');
			table.string('vehicle');
			table.string('special');
			table.string('from');
			table.string('to');
			table.boolean('isAutomatic');
			table.timestamps();
		})
	])
};

exports.down = function(knex, Promise) {
    return Promise.all([
		knex.schema.dropTable('challenges')
	])
};
