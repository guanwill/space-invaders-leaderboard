angular
  .module("leaderboardApp")
  .controller("LeaderboardsController", LeaderboardsController);

  LeaderboardsController.$inject = ['$resource', 'leaderboards']; //injecting factory and model

function LeaderboardsController($resource, Leaderboards){
  console.log(Leaderboards);
  console.log(Leaderboards.query());

  var self = this;
  self.all = [];
  self.leaderboards = {};

  self.getScore = function() {
    self.all = Leaderboards.query();
  };
  self.getScore();

  return self;
}
