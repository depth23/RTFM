var app = angular.module('rtfmApp');

app.service('ThreadService', function(fb) {
    var firebaseRef = new Firebase(fb.url);
    
    this.getThreads = function() {
        return new Firebase(fb.url + '/threads');
    };
    this.getThread = function(threadId) {
      return new Firebase(fb.url + '/threads/' + threadId);  
    };
});