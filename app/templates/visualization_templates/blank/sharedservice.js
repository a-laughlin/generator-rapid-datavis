app.service('<%= _.classify(visName) %>Service', ['$rootScope', function($rootScope){
  var serviceData = {
    "menuTitle":"<%= visName %>",
    "menuIconClass":"fa fa-calendar-o",
    "pubsubNamespace":"<%= _.slugify(visName) %>",
    "controlsTemplate":"<%= _.slugify(visName) %>_controls.html",
    "contentTemplate":"<%= _.slugify(visName) %>_content.html",
    "contentController":"<%= _.slugify(visName) %>_content_ctrl.js",
    "controlsController":"<%= _.slugify(visName) %>_controls_ctrl.js",
    "sharedService":"<%= _.slugify(visName) %>_service.js",
  };
  return serviceData;
}])
.run(['$rootScope', '<%= _.classify(visName) %>Service', function ($rootScope,<%= _.classify(visName) %>Service) {
  console.log('angular.copy(<%= _.classify(visName) %>Service)',angular.copy(<%= _.classify(visName) %>Service));
  $rootScope.availableVisualizations['<%= _.slugify(visName) %>'] = <%= _.classify(visName) %>Service;
  $rootScope.activeVisualizations.push(<%= _.classify(visName) %>Service);
}])