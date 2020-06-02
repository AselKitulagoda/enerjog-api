'use strict'

const Env = use('Env')

module.exports = {

  // Auth using JS web tokens
  authenticator: 'jwt',

  session: {
    serializer: 'lucid',
    model: 'App/Models/User',
    scheme: 'session',
    uid: 'email',
    password: 'password'
  },

  basic: {
    serializer: 'lucid',
    model: 'App/Models/User',
    scheme: 'basic',
    uid: 'email',
    password: 'password'
  },

  jwt: {
    serializer: 'lucid',
    model: 'App/Models/User',
    scheme: 'jwt',
    uid: 'email',
    password: 'password',
    options: {
      secret: Env.get('APP_KEY')
    }
  }
}
