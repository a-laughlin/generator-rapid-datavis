app.service('<%= _.classify(visName) %>Service', ['$rootScope', function($rootScope){
  var serviceData = {
    "menuTitle":"<%= visName %>",
    "menuIconClass":"fa fa-calendar-o",
    "pubsubNamespace":"<%= _.slugify(visName) %>",
    "controlsTemplate":"/visualizations/<%= _.slugify(visName) %>/sidebar.html",
    "contentTemplate":"/visualizations/<%= _.slugify(visName) %>/content.html",
    "contentController":"/visualizations/<%= _.slugify(visName) %>/contentcontroller.js",
    "controlsController":"/visualizations/<%= _.slugify(visName) %>/sidebarcontroller.js",
    "sharedService":"/visualizations/<%= _.slugify(visName) %>/sharedservice.js"
  };
  return serviceData;
}])
.run(['$rootScope', '<%= _.classify(visName) %>Service', function ($rootScope,<%= _.classify(visName) %>Service) {
  console.log('angular.copy(<%= _.classify(visName) %>Service)',angular.copy(<%= _.classify(visName) %>Service));
  $rootScope.availableVisualizations['<%= _.slugify(visName) %>'] = <%= _.classify(visName) %>Service;
  $rootScope.activeVisualizations.push(<%= _.classify(visName) %>Service);
}])