angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('atmosphere', {
    url: '/page2',
    templateUrl: 'templates/atmosphere.html',
    controller: 'atmosphereCtrl'
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('globalAQI', {
    url: '/page4',
    templateUrl: 'templates/globalAQI.html',
    controller: 'globalAQICtrl'
  })

  .state('temperatureData', {
    url: '/page5',
    templateUrl: 'templates/temperatureData.html',
    controller: 'temperatureDataCtrl'
  })

  .state('wind', {
    url: '/wind',
    templateUrl: 'templates/wind.html',
    controller: 'windCtrl'
  })

$urlRouterProvider.otherwise('/page2')

  

});