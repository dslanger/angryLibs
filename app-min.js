angular.module("angryLibs",["ngMessages","ngAnimate"]).controller("MainCtrl",function(){var o=this;o.prompt={},o.gender="female",o.showStory=!1,o.toggleStory=function(){o.showStory=!0},o.genderize=function(){"female"===o.gender?(o.nomPronoun="she",o.posPronoun="her"):(o.nomPronoun="he",o.posPronoun="his")},o.promptsFormSubmit=function(){o.toggleStory(),o.genderize()},o.reset=function(n){o.prompt={},o.showStory=!1,n.$setPristine()}});