// Generated on 2014-05-31 using generator-rapid-datavis 0.0.0

module.exports = function (grunt) {
  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.initConfig({
    dirs:{
      bower:'static/app/libs/bower_components/',
      libs:'static/app/libs/',
      vis:'static/app/visualizations/',
      app:'static/app/'
    },
    clean:{
      all: {
        options: {force: true },
        src: ['**/*-compiled.{js,css}']
      },
      vis_jscss:{
        options: {force: true },
        src: ['<%= dirs.vis %>**/*-compiled.{js,css}']
      }
    },
    concat:{
      lib_js: {
        src: [
          // machine learning lib http://cs.stanford.edu/people/karpathy/convnetjs/
          // computes correlations and others: https://github.com/jstat/jstat
          // various statistics and forcasting js scripts http://home.ubalt.edu/ntsbarsh/business-stat/stat-data/forecast.htm
          //

          '<%= dirs.bower %>es5-shim/es5-shim.min.js',
          '<%= dirs.bower %>angular/angular.js',
          '<%= dirs.bower %>angular-animate/angular-animate.min.js',
          '<%= dirs.bower %>angular-bootstrap/ui-bootstrap-tpls.min.js',
          '<%= dirs.bower %>angular-charts/dist/angular-charts.min.js',
          '<%= dirs.bower %>angular-formly/dist/formly.min.js',
          '<%= dirs.bower %>angular-gesture/ngGesture/gesture.js',
          '<%= dirs.bower %>angular-gridster/dist/scripts/gridster.min.js',
          '<%= dirs.bower %>angular-route/angular-route.js',
          '<%= dirs.bower %>angular-touch/angular-touch.min.js',
          '<%= dirs.bower %>datamaps/dist/datamaps.all.min.js',
          '<%= dirs.bower %>d3/d3.min.js',
          '<%= dirs.bower %>d3.chart/d3.chart.min.js',
          '<%= dirs.bower %>Faker/MinFaker.js',
          '<%= dirs.bower %>jquery/dist/jquery.min.js',
          '<%= dirs.bower %>jquery-ui/ui/minified/jquery-ui.min.js',
          '<%= dirs.libs %>leaflet/dist/leaflet.js', // had to manually insert this because the author didn't put it in the repo
          '<%= dirs.bower %>Leaflet.awesome-markers/dist/leaflet.awesome-markers.min.js',
          '<%= dirs.bower %>momentjs/min/moment.min.js',
          '<%= dirs.libs %>numericjs/numeric-1.2.6.min.js', // had to manually insert this because the author didn't put it in the repo
          '<%= dirs.bower %>lodash/dist/lodash.underscore.min.js', // temp.  Replace with lodash.min.js in same dir after merge - https://github.com/NYTimes/pourover/pull/14
          '<%= dirs.bower %>pourover/pourover.js', // temp.  Replace with lodash.min.js in same dir after merge - https://github.com/NYTimes/pourover/pull/14
          '<%= dirs.bower %>regression-js/build/regression.min.js',
          '<%= dirs.bower %>topojson/topojson.js', // temp.  Replace with lodash.min.js in same dir after merge - https://github.com/NYTimes/pourover/pull/14
        ],
        dest:'<%= dirs.libs %>libs-compiled.js'
      },
      lib_css:{
        src:[
          '<%= dirs.bower %>bootstrap/dist/css/bootstrap.min.css',
          '<%= dirs.bower %>bootstrap/dist/css/bootstrap-theme-min.css',
          '<%= dirs.libs %>leaflet/dist/leaflet.css',
          '<%= dirs.bower %>Leaflet.awesome-markers/dist/leaflet.awesome-markers.css',
        ],
        dest:'<%= dirs.libs %>libs-compiled.css'
      },
      vis_js:{
        src:'<%= dirs.vis %>**/*.js',
        dest:'<%= dirs.vis %>visualizations-compiled.js',
      },
      vis_css:{
        src:'<%= dirs.vis %>**/*.css',
        dest:'<%= dirs.vis %>visualizations-compiled.css',
      }
    },
    connect: {
      dev:{
        options:{
          port: 8000,
          livereload: true,
          // change this to '0.0.0.0' to access the server from outside
          hostname: 'localhost',
          base:'<%= dirs.app %>'
        }
      }
    },
    watch: {
      frontendfiles: {
        files:  [ 'static/app/**/*','!**/*-compiled*'],
        tasks:  [ 'clean:vis_jscss', 'concat:vis_js','concat:vis_css' ],
        options: {
          livereload:true
        }
      }
    }
  });

  grunt.registerTask('default', ['clean', 'concat','connect:dev','watch']);
};