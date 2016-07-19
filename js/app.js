angular
  .module("leaderboardApp", ['ngResource']) //this function cannot function without ngresource dependancy. ngresource here is a global injection of http requests
  .constant('API', 'http://localhost:3000/api'); //declare a constant for our api call
