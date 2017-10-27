'use strict';
const Generator = require('yeoman-generator');
// Const chalk = require('chalk');
// const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    let prompts = [];
    this.log(this.options.name);
    if (!this.options.name) {
      prompts = [
        {
          type: 'string',
          name: 'name',
          message: 'Cual es el nombre del componente (sin Component)',
          default: false
        }
      ];
    }
    if (prompts.length) {
      return this.prompt(prompts).then(props => {
        // To access props later use this.props.someAnswer;
        this.props = props;
        this.options.name = this.props.name;

        this.options = Object.assign({}, this.props);
      });
    }
  }

  writing() {
    const path = this.options.name ? `${this.options.name}` : `app`;
    const name = this.options.name || 'component';
    const titleCase = string => string.charAt(0).toUpperCase() + string.slice(1);
    const lowerCase = string => string.charAt(0).toLowerCase() + string.slice(1);
    const baseFolder = lowerCase(path);
    const basePath = `${baseFolder}/${lowerCase(name)}`;

    const props = Object.assign(
      {},
      {
        name: lowerCase(name),
        Name: titleCase(name)
      },
      this.options
    );

    this.log('Generando component.ts');
    this.fs.copyTpl(
      this.templatePath('component.ts1'),
      this.destinationPath(basePath + '.component.ts'),
      props
    );

    this.log('Generando component.html');
    this.fs.copyTpl(
      this.templatePath('component.html'),
      this.destinationPath(basePath + '.component.html'),
      props
    );
  }

  install() {}
};
