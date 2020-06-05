# Enerjog API

## Software versions to install
*   Node (npm version 6.14.4)
*   Adonis CLI - Install by running ```npm i -g @adonisjs/cli```

## Note
The website and its corresponding API for the database have both been deployed on to Heroku. The link to the website can be found [here](https://enerjog-tracker.herokuapp.com).

## Running the API
*   First ```cd enerjog-api```
*   Install necessary packages using ```npm install```
*   Generate an application key by running ```adonis key:generate```
*   Migrate the latest version of the database by running ```adonis migration:run```
*   Run the API by ```npm start```

This starts the API on ```http://127.0.0.1:3333/api```.

## Running the Website
*   First ```cd enerjog-website```
*   Install the necessary packages using ```npm install```
*   Inside the ```nuxt.config.js``` file, change the ```baseURL``` under axios to ```http://127.0.0.1:3333/api```.
*   Run the website using ```npm run dev```

This starts the Website on ```http://localhost:3000```.

### Test Login
Here is a sample user you can use to login. 
*   **Username** - test
*   **Password** - abc123

However, if you wish to register with different details, you can do so through the /register page

