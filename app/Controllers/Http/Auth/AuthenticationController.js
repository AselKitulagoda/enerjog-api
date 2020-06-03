'use strict'

// make use of User Model
const User = use('App/Models/User')

class AuthenticationController {
  // handles registration case
  async register ({ request, auth, response }) {
    const userData = request.only(['username', 'email', 'password', 'model', 'colour'])

    try {
      // try to create a model from the user data
      const user = await User.create(userData)
      // try to generate a auth token for the user from user data
      const token = await auth.generate(user)

      return response.json({
        // if u a json response is returned then you are sucessful
        status: 'success',
        //creates auth token for user session
        data: token
      })
    } catch (error) {
      // if the response returns an error return an error JSON response 400
      return response.status(400).json({
        status: 'error',
        message: 'Sorry, there has been an issue. Try again!'
      })
    }
  }
// handles login case 
  async login ({ request, auth, response }) {
    // only able to handle requests for email and password
    const { email, password } = request.only(['email', 'password'])

    try {
      // attend to generate token from auth using email and password from request
      const token = await auth.attempt(email, password)

      return response.json({
        // if a json response is eturned then return a sucessful status and a auth token  
        status: 'success',
        data: token
      })
    } catch (error) {
      // if the response returns an error return an error JSON response 400
      response.status(400).json({
        status: 'error',
        message: 'Invalid credentials!'
      })
    }
  }
// handles myprofile case
  async me ({ auth, response }) {
    // console.log(auth.user)
    return response.json({
      // if a json reson has already been retrieved keep status as success and set the authorized user 
      status: 'success',
      data: auth.user
    })
  }

  async change({request,auth,response}){
    try {
      const newuserdata = request.only(['colour','model'])
      console.log("got here")
      console.log(auth.user)
      let currentuser = await User.find(auth.user.id)
      console.log(currentuser.model)
      currentuser.model = newuserdata.model
      currentuser.colour = newuserdata.colour
      await currentuser.save()
      console.log(currentuser)
      return response.json({
        status: 'success',
        data: auth.user
      })
    }
     catch (error) {
      // if the response returns an error return an error JSON response 400
      return response.status(400).json({
        status: 'error',
        message: 'There was a problem changing your order, please try again later.'
      })
    }
  }

  async destroyRec ({request, auth, response }) {
    console.log(auth.user)
    const delete_flag = request.only(['delete'])
    let currentuser = await User.find(auth.user.id)
    await currentuser.delete()
    console.log("deleted")
    return response.json({
      // if a json reson has already been retrieved keep status as success and set the authorized user 
      status: 'success',
      data: auth.user
    })
  }

  
}

module.exports = AuthenticationController
