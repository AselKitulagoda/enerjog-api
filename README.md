# Adonis API application

This is the boilerplate for creating an API server in AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

## Software versions to install
*   Node (npm version 6.14.4)
*   Adonis CLI - Install by running ```npm i -g @adonisjs/cli```

## Note
The website and its corresponding API for the database have both been deployed on to Heroku. The link to the website can be found [here](http://enerjog.herokuapp.com).

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
