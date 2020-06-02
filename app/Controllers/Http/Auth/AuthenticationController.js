'use strict'

const User = use('App/Models/User')

class AuthenticationController {
  async register ({ request, auth, response }) {
    const userData = request.only(['username', 'email', 'password', 'model', 'colour'])

    try {
      const user = await User.create(userData)

      const token = await auth.generate(user)

      return response.json({
        status: 'success',
        data: token
      })
    } catch (error) {
      return response.status(400).json({
        status: 'error',
        message: 'Sorry, there has been an issue. Try again!'
      })
    }
  }

  async login ({ request, auth, response }) {
    const { email, password } = request.only(['email', 'password'])

    try {
      const token = await auth.attempt(email, password)

      return response.json({
        status: 'success',
        data: token
      })
    } catch (error) {
      response.status(400).json({
        status: 'error',
        message: 'Invalid credentials!'
      })
    }
  }

  async me ({ auth, response }) {
    return response.json({
      status: 'success',
      data: auth.user
    })
  }
}

module.exports = AuthenticationController
