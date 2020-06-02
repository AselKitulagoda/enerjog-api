'use strict'

const Env = use('Env')

module.exports = {

  // Using bcrypt by default to hash passwords
  driver: Env.get('HASH_DRIVER', 'bcrypt'),

  bcrypt: {
    rounds: 10
  },

  argon: {
    type: 1
  }
}
