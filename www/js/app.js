// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js

//var localDB = new PouchDB('todos', {adapter: 'websql'});

angular.module('starter', ['ionic', 'starter.controllers','starter.services', 'ngCordova.plugins.camera','angularMoment','ngStorage'])
.constant('AppConfig',{
  // change this url to match your bluemix application route that you selected when you deployed the app
  appServer: 'https://ionic.mybluemix.net',
  // Important do not use localhost when using ios or android hybrid app
  //appServer: 'http://10.0.1.17:6001',
  localhostPort: '6001',
  remoteDBUrl: 'https://97c9a4fe-847d-4bd4-bcdd-c671a3141882-bluemix.cloudant.com/photos_db'
})
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

    
    
    
    
    
    
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.chat', {
    url: '/chat',
    views: {
      'menuContent': {
        templateUrl: 'templates/chat.html',
        controller: 'ChatCtrl'
      }
    }
  })
  
  .state('app.photos', {
    url: '/photos',
    views: {
      'menuContent': {
        templateUrl: 'templates/photos.html',
        controller: 'PhotoCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/chat');
})

.filter('timeAgo', function () {
    return function (date) {
        if (!date) return;
        return moment(date, 'x').fromNow();
    }
});



