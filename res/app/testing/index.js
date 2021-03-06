module.exports = angular.module('testing', [
  require('stf/common-ui/nice-tabs').name,
  require('./commands').name,
  require('./report').name,
  require('./devices').name,
  require('./columns').name

])
  .config(function($routeProvider) {

    $routeProvider
      .when('/testing/', {
        template: require('./testing.pug')
      })
  })
  .controller('TestingCtrl', require('./testing-controller'))
