'use strict';
var path = require('path');
var fs = require('fs');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
// var _ = require('lodash');
var wrench = require('wrench');
// path.join(self.instanceTemplatesDir, val + '_' + self.visName )

var RapidDatavisGenerator = yeoman.generators.Base.extend({
  init: function () {

    this.pkg = require('../package.json');
  },

  askFor: function () {
    var done = this.async();
    // Have Yeoman greet the user.
    this.log(yosay('Welcome to the marvelous RapidDatavis generator!  Any visualization scaffolded in < 30 seconds'));
    this.fullRootDir = process.cwd();
    this.fullRootGeneratorDir = __dirname;
    this.appDir = 'static/app';

    this.fullAppDir = path.join(this.fullRootDir, this.appDir);
    this.templatesDir = 'visualization_templates';
    this.generatorTemplatesDir = path.join(this.fullRootGeneratorDir, this.templatesDir);
    this.instanceTemplatesDir = path.join(this.fullRootDir, this.templatesDir);
    this.visDir = path.join(this.appDir, 'visualizations');
    this.fullVisDir = path.join(this.visDir, 'visualizations');
    this.templateChoices = fs.existsSync(this.instanceTemplatesDir) ? fs.readdirSync(this.instanceTemplatesDir) : ['default'];
    // types of prompts from https://github.com/SBoudrias/Inquirer.js
    // input, confirm, list, rawlist, expand, checkbox, password
    var projectInitName = 'Initialize project';
    var defaultVisOption = 'New visualization from default template';
    var templateOption = 'New template from default template';

    var prompts = [{
      type: 'list',
      name: 'mainChoice',
      message: 'What type should it be?',
      choices: [
        templateOption,
        defaultVisOption,
        // 'template from visualization', ** not implemented yet **
        projectInitName
        // 'default - from remote github repo **not implemented yet**',
      ],
      default: fs.existsSync(this.appDir) ? defaultVisOption : projectInitName // can also be a function that returns the default val
    }, {
      type: 'input',
      name: 'visName',
      when: function (answers) {
        return answers.mainChoice !== projectInitName;
      },
      message: 'What would you like to name your new creation?',
      default: 'MyVisualization'
    }, {
      type: 'checkbox',
      name: 'visType',
      message: 'What types would you like?',
      when: function (answers) {
        return answers.mainChoice === defaultVisOption;
      },
      choices: this.templateChoices,
      default: ['default']
    }, {
      type: 'checkbox',
      name: 'templateType',
      when: function (answers) {
        return answers.mainChoice === templateOption;
      },
      message: 'What types would you like?',
      choices: this.templateChoices,
      default: ['default']
    }];


    this.prompt(prompts, function (props) {

      var self = this;

      if (props.mainChoice === projectInitName) {
        this.projectName = 'Rapid Datavis';
        this.template('_Gruntfile.js', 'Gruntfile.js');
        this.template('_bower.json', 'bower.json');
        this.template('_package.json', 'package.json');


        this.copy('jshintrc', '.jshintrc');
        this.copy('bowerrc', '.bowerrc');
        this.copy('gitignore', '.gitignore');
        this.copy('README', 'README.md');

        this.directory('static', 'static');
        this.directory(this.templatesDir, this.templatesDir);

        this.visName = 'default';
         // copy an example visualization
        self._.each(props.visType, function (val) {
          self.directory(path.join(self.instanceTemplatesDir, val), path.join(self.visDir, self.visName));
        });

        this.on('end', function () { //methods on RapidDatavisGenerator done executing
          if (!this.options['skip-install']) {
            this.installDependencies(); // calls bower install and npm install
          }
        });
      } else if (props.mainChoice === defaultVisOption) {
        this.visName = this._.slugify(props.visName);
        self._.each(props.visType, function (val) {
          self.directory(path.join(self.instanceTemplatesDir, val), path.join(self.visDir, self.visName));
        });
      } else if (props.mainChoice === templateOption) {
        this.visName = this._.slugify(props.visName);
        console.log('template chosen');
        self._.each(props.templateType, function (val) {
          wrench.copyDirSyncRecursive(path.join(self.instanceTemplatesDir, val), path.join(self.instanceTemplatesDir, val + '_' + self.visName));
        });
      }
      done();
    }.bind(this));

  }
});

module.exports = RapidDatavisGenerator;