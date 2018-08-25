exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('challenges').del()
      .then(function () {
        return Promise.all([
          // Inserts seed entries
          knex('challenges').insert({id: 1, name: 'Test'})
        ]);
      });
  };