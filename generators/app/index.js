'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the great ' + chalk.red('generator-smtemplate') + ' generator!'
    ));

    var prompts = [{
      type: 'confirm',
      name: 'wantInstall',
      message: 'Would you really like to start installation ?',
      default: true
    }];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    this.fs.copy(
      this.templatePath('**'),
      this.destinationPath()
    );

    this.fs.copy(
      this.templatePath('.*'),
      this.destinationPath()
    );
  },

  install: function () {
    this.installDependencies();
  }
});
