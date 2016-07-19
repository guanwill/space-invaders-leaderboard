//this is a factory and model (diff to normal model meaning). We define our routes here and use the constant API defined in app.js
angular
  .module('leaderboardApp')
  .factory('leaderboards', leaderboards);

leaderboards.$inject = ['$resource', 'API'];
function leaderboards($resource, API) {

  return $resource(
    API,
    { 'get':       { method: 'GET' }
      // 'save':      { method: 'POST' },
      // 'query':     { method: 'GET', isArray: true},
      // 'remove':    { method: 'DELETE' },
      // 'delete':    { method: 'DELETE' },
    }
  );
}
