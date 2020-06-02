'use strict'

const Route = use('Route')

Route.group(() => {
  Route.post('login', 'Auth/AuthenticationController.login')
  Route.post('register', 'Auth/AuthenticationController.register')
  Route.post('change', 'Auth/AuthenticationController.change')
  Route.get('me', 'Auth/AuthenticationController.me').middleware(['auth'])
}).prefix('api')
