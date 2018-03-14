var app = angular.module('app', []);
app.controller('PostCtrl', function($scope){
  $scope.addPost = function(){
    if($scope.postBody) {
      $scope.posts.unshift({
        username: 'Macko666',
        body: $scope.postBody
      });
      $scope.postBody = '';
    }
  }
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
