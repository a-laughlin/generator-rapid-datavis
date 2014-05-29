/**
* MyVisApp Module
*
* Description
*/
var app = angular.module('<%= _.slugify(projectName) %>', [

])
.config([function () {

}])
.run(['$rootScope', function ($rootScope) {
  $rootScope.availableVisualizations = {};
  $rootScope.activeVisualizations = [];
}])
.controller('SidebarCtrl', ['$scope', function ($scope) {

}])
.controller('ContentCtrl', ['$scope', function ($scope) {

}]);

// a visualization will have
  // controls template
  // content template

  // config.json
// yeoman rapid-datavis:visualization generates a visualization
// gruntfile loops over each of the visualizations and inserts them