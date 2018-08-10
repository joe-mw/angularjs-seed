
(function (app) {
  'use strict';

  // jquery tings - lets see if it works
  $('#navbar_toggle').click(function (e) {
    $('.ui.labeled.icon.sidebar').sidebar('toggle');
  })

  // Routing 
  app.config(function ($stateProvider) {

    let partial1 = {
      name: "partial1",
      url: "/partial1",
      templateUrl: "./partials/partial1.html"
    }

    let partial2 = {
      name: "partial2",
      url: "/partial2",
      templateUrl: "./partials/partial2.html"
    }
    
    $stateProvider.state(partial1);
    $stateProvider.state(partial2);
  })
  
 
})(angular.module("myApp", ['ui.router','myApp.filters','myApp.services','myApp.directives','myApp.controllers']))




