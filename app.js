angular.module('angryLibs', ['ngMessages'])
  .controller('MainCtrl', function() {
    var vm = this;
    vm.prompt = {};

    vm.gender = 'female';
    vm.showStory = false;

    vm.toggleStory = function() {
      vm.showStory = true;
    };

    vm.genderize = function() {
      if (vm.gender === 'female') {
        vm.nomPronoun = 'she';
        vm.posPronoun = 'her';
      } else {
        vm.nomPronoun = 'he';
        vm.posPronoun = 'his';
      }
    };




    vm.reset = function() {
      vm.prompt = {};
      vm.showStory = false;
    };
  });
