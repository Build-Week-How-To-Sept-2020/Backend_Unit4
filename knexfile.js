module.exports = {
  production: {
    client: "sqlite3",
    connection: {
      filename: "./database/auth.db3",
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./database/migrations",
    },
    seeds: {
      directory: "./database/seeds",
    }
  },

  // testing: {
  //   client: 'sqlite3',
  //   connection: { filename: './database/auth-testing.db3' },
  //   useNullAsDefault: true,
  //   migrations: {
  //     directory: './database/migrations',
  //     tableName: 'dbmigrations',
  //   },
  //   seeds: { directory: './database/seeds' },
  // },
};
