module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      user: 'aldente-backend',
      password: 'gibbiX12345',
      database: 'aldente',
      port: 3306,
      charset: 'utf8'
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};