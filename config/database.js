'use strict'

const Env = use('Env')
const Helpers = use('Helpers')

module.exports = {

  // Connection settings for sqlite db
  connection: Env.get('DB_CONNECTION', 'sqlite'),

  // Setting up sqlite database
  sqlite: {
    client: 'sqlite3',
    connection: {
      filename: Helpers.databasePath(`${Env.get('DB_DATABASE', 'development')}.sqlite`)
    },
    useNullAsDefault: true,
    debug: Env.get('DB_DEBUG', false)
  }
}
