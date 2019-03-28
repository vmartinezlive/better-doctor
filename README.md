# Victoria Martinez

#### Website where users may enter a medical issue (ie: “sore throat”, "rash", etc.) into a form, submit it, and receive a list of local physicians.

#### By _**Victoria Martinez**_

## Description

This website will let users may enter a medical issue (ie: “sore throat”, "rash", etc.) into a form, submit it, and receive a list of local physicians.  The application will use a live API using BetterDoctor API to retrieve medical data.
## Setup/Installation Requirements

* Go to GitHub and clone https://github.com/vmartinezlive/better-doctor project. Use project url to clone project.
* User must have own api to use this application: Place your token in an .env file at the top level of your directory. name your API exports.apiKey in .env
* Run npm install to install dependencies
* Run npm run start to build and start the dev server


## Objectives:

* A user should be able to enter a medical issue to receive a list of doctors in the Portland area that fit the search query.
* A user should be able to to enter a name to receive a list of doctors in the Portland area that fit the search query.
* If the query response includes any doctors, the following information should be included about each doctor: first name, last name, address, phone number, website and whether or not the doctor is accepting new patients (the API provides this data).
* If the API call results in an error (any message not a 200 OK), the application should return a notification that states what the error is.
* If the query response doesn't include any doctors (for instance, if no doctors meet the search criteria), the application should return a notification that states that no doctors meet the criteria. (This is not an error so it should be handled separately from any errors.)

## Known Bugs

There are no known issues.

## Support and contact details

For question or issues, contact [ ](vmartinez72@live.com)

## Technologies Used

* JavaScript
* Node.js
* jQuery
* Bootstrap
* Webpack
* Postman
* BetterDoctor API


### License

Copyright (c) 2019 **_Victoria Martinez_**
