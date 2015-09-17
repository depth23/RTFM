var app = angular.module('rtfmApp', ['firebase', 'ngRoute']);

app.constant('fb', {url:"https://qv-angularfire-chat.firebaseio.com/rtfm"});

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/threads', {
            templateUrl: 'threads.html',
            controller: 'ThreadsCtrl',
            resolve: {
                threads: function(ThreadService, $firebaseArray) {
                    return $firebaseArray(ThreadService.getThread()).$loaded();
                }
            }
        })
//        .when('/threads/:threadId', {
//            templateUrl: 'threads.html',
//            controller:'ThreadCtrl',
//            resolve: {
//                thread: function(ThreadService, $firebaseObject, $route) {
//                 return $firebaseObject(ThreadService.getThread($route.current.params.threadId)).$loaded();   
//                }
//            }
//        })
        .otherwise('/threads');
    
});
