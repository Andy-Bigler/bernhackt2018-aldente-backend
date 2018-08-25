module.exports = {

    development: {
      client: 'mysql',
      connection: {
        host     : 'localhost',
        user     : 'root',
        password : 'gibbiX12345',
        database : 'BernMobil',
        port     :  32770,
        charset  : 'utf8'
      },
      migrations: {
        tableName: 'knex_migrations'
      }
    }
  
  };