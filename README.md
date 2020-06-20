#Task7 - Car database

## Table of contents
* [About the App](#about-the-app)
* [Installation](#installation)


### About the App

This car database app allows the user to enter in the details of a car including the owners name.  
All information is stored in a MongoDB database.  When the user selects to view all the information,
the mongo database is used to access such information.  The user is able to edit or delete each item 
as they wish.
The tab 'Cars older than 5 years' displays all the cars in the database that are older than 5 years.

### Installation

Extract all files, open up your terminal and follow these instructions:

* Fill in mongoDB information in file db.js in database folder
* run command "npm install to install all necessary node modules
* cd into the frontend
* run command "npm install" 
* cd back into project folder and run command "npm run dev" - this will launch both the backend server on port 4000 as well as the frontend on port 3000 concurrently

