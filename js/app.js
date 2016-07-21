angular
  .module("leaderboardApp", ['ngResource']) //this function cannot function without ngresource dependancy. ngresource here is a global injection of http requests
  .constant('API', 'https://arcane-river-66749.herokuapp.com/api'); //declare a constant for our api call
