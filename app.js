angular.module('angryLibs', [])
  .controller('MainCtrl', function($scope) {
    $scope.prompt = {};
    //$scope.showStory = false;
    // $scope.prompts = {
    //   name:'Name',
    //   jobTitle:'Job Title',
    //   tediousTask:'Tedious Task',
    //   dirtyTask:'Dirty Task',
    //   celebrity:'Celebrity',
    //   uselessSkill:'Useless Skill',
    //   hugeNumber:'Huge Number',
    //   adjective:'Adjective'
    // };

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
