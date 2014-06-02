# generator-rapid-datavis [![Build Status](https://secure.travis-ci.org/a-laughlin/generator-rapid-datavis.png?branch=master)](https://travis-ci.org/a-laughlin/generator-rapid-datavis)

> [Yeoman](http://yeoman.io) generator


## Getting Started
 1. Install [Node.js](http://nodejs.org/)
 2. Install Yeoman and the Rapid Datavis Generator
```bash
$ npm install -g yo generator-rapid-datavis
 3. Create a directory to put your project in
```bash
$ mkdir myproject && cd myproject
```
 4. Run the generator, accepting the default options
```bash
$ yo rapid-datavis
```

The resulting file structure should look like this:
```
myproject
+---visualization_templates
    +---default
        +---content.html
        +---contentcontroller.js
        +---sharedservice.js
        +---sidebar.html
        +---sidebarcontroller.js
        +---main.css
+---static
|   +---app
|       \---visualizations
|           \---example-vis-from-default-template
|       +---data
|       |   +---fwdvisualbudgettonight
|       +---libs
|       |   +---bower_components
|       |   |   +---angular
|       |   |   +---angular-animate
|       |   |   +---angular-bootstrap
|       |   |   +---angular-charts
|       |   |   +---angular-formly
|       |   |   +---angular-gesture
|       |   |   +---angular-gridster
|       |   |   +---angular-route
|       |   |   +---angular-touch
|       |   |   +---bootstrap
|       |   |   +---d3
|       |   |   +---d3.chart
|       |   |   +---datamaps
|       |   |   +---es5-shim
|       |   |   +---Faker
|       |   |   +---fontawesome
|       |   |   +---jquery
|       |   |   +---jquery-ui
|       |   |   +---Leaflet.awesome-markers
|       |   |   +---lodash
|       |   |   +---momentjs
|       |   |   +---numericjs
|       |   |   +---pourover
|       |   |   +---regression-js
|       |   |   +---topojson
|       |   |   +---underscore
|       |   +---leaflet
|       |   +---mapc
|       |   +---numericjs
```