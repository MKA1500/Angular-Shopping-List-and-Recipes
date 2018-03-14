var app = angular.module('app', []);
app.controller('PostCtrl', function($scope){
  $scope.posts = [
    {
      username: 'Macko666',
      body: 'I just ate breakfast'
    },
    {
      username: 'PAD',
      body: 'Damn it, its raining again'
    }
  ];
});
