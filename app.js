angular.module('angryLibs', ['ngMessages', 'ngAnimate'])
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

    vm.promptsFormSubmit = function() {
      vm.toggleStory();
      vm.genderize();
    };


    vm.reset = function(form) {
      vm.prompt = {};
      vm.showStory = false;
      form.$setPristine();
    };
  });
