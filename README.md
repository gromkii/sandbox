# Sandbox Coding Challenge

## Installation


```
npm install
```

Using postgres for testing.

```
createdb sandbox_test
knex migrate:latest
```

To run tests.

```
npm test
```

## Technologies Used

* Node/Express
  - Server
  - Backend api
  - User auth
* React
  - Main framework for front end views.
  - First time building an app with a back-end!
* jQuery
  - Making AJAX calls to the API
* Bootstrap/SCSS
  - Prettied up the user forms.
* Mocha/Chai/Supertest
  - Testing suite.

## Thought Process

While the challenge was originally presented as a fairly straight forward task, I really
wanted to push myself to try to make a small application in React with scalability in
mind. This was my first attempt at really making a single page app with React, and in
doing so I have learned a lot about the framework and I am excited to work on more
projects with it in the future.

## Challenges

Having to learn React in such a short amount of time was my main obstacle to overcome
for this project. The biggest take away from doing all of this was how to store
information in a react components state, especially from AJAX calls to an API.
