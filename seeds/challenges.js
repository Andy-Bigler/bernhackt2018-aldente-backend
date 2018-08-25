exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('challenges').del()
      .then(function () {
        return Promise.all([
          // Inserts seed entries
          knex('challenges').insert({id: 1, name: 'Linie 10x10', description: 'Fahre 10 Stationen mit der Linie 10', points: 100, time: null, distance: null, vehicle: null, special: null, from: null, to: null, isAutomatic: true}),
          knex('challenges').insert({id: 2, name: '10km Fahren', description: 'Fahre 10km im Berner öV Netz', points: 500, time: null, distance: 10, vehicle: null, special: null, from: null, to: null, isAutomatic: true}),
          knex('challenges').insert({id: 3, name: 'Dampftram Challenge', description: 'Fahre eine Stunde im Dampftram', points: 100, time: null, distance: null, vehicle: 'Tram', special: 'Dampftram', from: null, to: null, isAutomatic: false}),
          knex('challenges').insert({id: 4, name: 'Brücken Challenge', description: 'Fahre über 5 Brücken an einem Tag', points: 100, time: 5, distance: null, vehicle: null, special: null, from: null, to: null, isAutomatic: false}),
          knex('challenges').insert({id: 5, name: 'Nachtaktiv', description: 'Fahre 10 Mal im Moonliner', points: 100, time: 10, distance: null, vehicle: null, special: null, from: null, to: null, isAutomatic: true})
        ]);
      });
  };