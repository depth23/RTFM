var app = angular.module('rtfmApp');

app.controller('ThreadsCtrl', function($scope, threads) {
    $scope.threads = threads;
    $scope.createThread = function(username, newThreadTitle) {
        $scope.threads.$add({
            username: username,
            title: newThreadTitle});
    };
});