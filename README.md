# Web-based application for events registration

## Project Description
This project is a web-based application for events registration. It consists of three main pages:
1. **Events Page**: Users can observe the paginated list of available events.
2. **Registration Page**: Users can register for an event by filling out a registration form.
3. **Participants Page**: Users can see a list of registered participants.

## Technologies and Tools
- **Client-side**: React, axios, formik, react-router-dom, yup
- **Server-side**: Node.js, Express, Sequelize
- **Database**: PostgreSQL

## Installation
To install the project on your local machine, follow these steps:

### Clone the repository:

    git clone <URL repository>

### Install dependencies:

In the project directories 'client' and 'server', install the respective dependencies:

    npm install

### Edit the server \ config \ config.json file with your information:

    password: '[Your Password]',
    database: '[Your database]',
    host: 'localhost'

### Run migrations and seeds:

    npx sequelize-cli db:migrate
    npx sequelize-cli db:seed:all

## Start the project
Start the server:

    cd server
    npm start
Navigate to the client directory and start the client:

    cd client
    npm start

## Contacts
olena.kostiuk25@gmail.com
