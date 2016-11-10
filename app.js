angular.module('angryLibs', [])
  .controller('MainCtrl', function($scope) {
    $scope.prompt = {};
    
    $scope.gender = 'female';

    $scope.genderize = function() {
      if($scope.gender === 'female') {
        $scope.nomPronoun = 'she';
        $scope.posPronoun = 'her';
      } else {
        $scope.nomPronoun = 'he';
        $scope.posPronoun = 'his';
      }
    };


    $scope.reset = function() {
      $scope.prompt = {};
      $scope.showStory = false;
    };
  });
