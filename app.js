angular.module('angryLibs', [])
  .controller('MainCtrl', function($scope) {
    $scope.clearForm = function() {
        $scope.promptsForm.$setPristine();
    }
  });
