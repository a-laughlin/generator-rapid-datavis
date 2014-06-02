Yeoman Generator RapidDatavis is built to scaffold a structure for any data visualization on the web in under 30 seconds.
Yeoman Generator RapidDatavis is built to scaffold a structure for any data visualization on the web in under 30 seconds.

## Getting Started
 1. Install [Node.js](http://nodejs.org/)
 2. Install Yeoman and the Rapid Datavis Generator
```bash
$ npm install -g yo generator-rapid-datavis
```
3. Create a directory to put your project in
```bash
$ mkdir myproject && cd myproject


## RapidDatavis options
Running ```$ yo rapid-datavis``` presents you with the following options:

### Initialize project
The default option on first run.  It creates this file structure:

```
\---visualization_templates            // templates for your visualizations
  \---default (I'll add more of these in time)
    |---content.html                   // populates the main vis section
    |---contentcontroller.js           // angular controller for main vis section
    |---sharedservice.js               // angular service for shared visualization attributes between controllers
    |---sidebar.html                   // html for sidebar controls section
    |---sidebarcontroller.js           // angular controller for sidebar controls
    |---main.css                       // css for vis and sidebar
\---static
  \---app                              // The root dir your app is served from.
    |---app.css                        // app-wide styles
    |---app.js                         // minimal angular app structure
    |---index.html                     // the page you see after running grunt
    \---visualizations
      |---visualizations-compiled.js   // after running grunt, all vis' js concatenated for faster loading
      |---visualizations-compiled.css  // after running grunt, all vis' css concatenated for faster loading
      \---default                      // generated from visualization_templates/default
        |---content.html
        |---contentcontroller.js
        |---sharedservice.js
        |---sidebar.html
        |---sidebarcontroller.js
        |---main.css
  \---data                             // your data goes here
  \---libs                             // all libs in this dir are available for use in visualizations
    |---libs-compiled.js               // after running grunt, all libs' js concatenated for faster loading
    |---libs-compiled.css              // after running grunt, all libs' css concatenated for faster loading
    \---leaflet                        // maps utilities (repo didn't work with bower)
    \---mapc                           // some tile sets for maps (repo didn't work with bower)
    \---numericjs                      // various math utility functions (repo didn't work with bower)
    \---bower_components
      \---angular                      // runs the app
      \---angular-animate              // all the others provided as utilities.
      \---angular-bootstrap
      \---angular-charts
      \---angular-formly
      \---angular-gesture
      \---angular-gridster
      \---angular-route
      \---angular-touch
      \---bootstrap
      \---d3
      \---d3.chart
      \---datamaps
      \---es5-shim
      \---Faker
      \---fontawesome
      \---jquery
      \---jquery-ui
      \---Leaflet.awesome-markers
      \---lodash
      \---momentjs
      \---numericjs
      \---pourover
      \---regression-js
      \---topojson
      \---underscore
```



### New visualization from default template
The default option on each subsequent run.  It creates a new visualization from a template you select in your visualization_templates directory.  I plan to add more templates as I port visualizations I've made into this structure.


#### Inserting your code
Your main visualization code should go in ```static/app/visualizations/contentcontroller.js```
Any external controls can go in ```static/app/visualizations/sidebarcontroller.js```

#### Seeing your visualization
 3 Run ```$ grunt``` to start the server.
That's it! See your visualizations at [http://localhost:8000](http://localhost:8000)

### New template from default template
Right now this just copies the default template
If enough folks find this project useful, I'll work on an automated way to convert visualizations to templates and share them

### New Visualization from Bower
TBD if enough folks find this project useful

### New Visualiztion from Github Repo
TBD if enough folks find this project useful

## Contributing
Pull requests welcome at:
https://github.com/a-laughlin/generator-rapid-datavis