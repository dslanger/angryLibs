angular.module('angryLibs', [])
  .controller('MainCtrl', function() {
    var vm = this;
    vm.prompt = {};

    vm.gender = 'female';

    vm.genderize = function() {
      if(vm.gender === 'female') {
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
