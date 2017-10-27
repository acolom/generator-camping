'use strict';
const Generator = require('yeoman-generator');
// Const chalk = require('chalk');
// const yosay = require('yosay');

module.exports = class extends Generator {
  constructor(args, opts) {
    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts);
    this.option('crud');

    this.configGenerator = {};
  }
  prompting() {
    let prompts = [];

    if (!this.options.name) {
      prompts = [
        {
          type: 'string',
          name: 'name',
          message: 'Cual es el nombre del componente (sin Component)',
          default: false
        },
        {
          type: 'confirm',
          name: 'index',
          message: 'Incluir index'
        },
        {
          type: 'confirm',
          name: 'service',
          message: 'Incluir servicio'
        },
        {
          type: 'confirm',
          name: 'route',
          message: 'Incluir ruta'
        },
        {
          type: 'confirm',
          name: 'css',
          message: 'Incluir css'
        },
        this.options.crud
          ? {
              type: 'confirm',
              name: 'backEndCrud',
              message: 'Generar codigo de backend'
            }
          : null
      ].filter(t => Boolean(t));
    }
    if (prompts.length) {
      return this.prompt(prompts).then(props => {
        // To access props later use this.props.someAnswer;
        this.props = props;
        // This.options.name = this.props.name;

        this.configGenerator = Object.assign({}, this.options, this.props);
        this.log(this.configGenerator.crud);
      });
    }
  }

  writing() {
    this.log(this.configGenerator.crud);
    const path = this.configGenerator.name ? `${this.configGenerator.name}` : `app`;
    const name = this.configGenerator.name || 'component';
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
      this.configGenerator
    );

    if (this.configGenerator.crud) {
      this.log('Generando crud component.ts');
      this.composeWith(require.resolve('../crudComponent'), this.configGenerator);
    } else {
      this.log('Generando component.ts');
      this.fs.copyTpl(
        this.templatePath('component.ts1'),
        this.destinationPath(basePath + '.component.ts'),
        props
      );
      // El html ya lo genera direcatment elcrud component
      this.log('Generando component.html');
      this.fs.copyTpl(
        this.templatePath('component.html'),
        this.destinationPath(basePath + '.component.html'),
        props
      );
    }

    if (this.configGenerator.index) {
      this.log('Generando index.ts');
      this.fs.copyTpl(
        this.templatePath('index.ts1'),
        this.destinationPath(baseFolder + '/index.ts'),
        props
      );
    }

    if (this.configGenerator.route) {
      this.log('Generando route.ts');
      this.fs.copyTpl(
        this.templatePath('route.ts1'),
        this.destinationPath(basePath + '.route.ts'),
        props
      );
    }

    if (this.configGenerator.service && this.configGenerator.crud) {
      this.log('Generando crud service.ts');
      this.composeWith(require.resolve('../crudService'), this.configGenerator);
    } else if (this.configGenerator.service) {
      this.log('Generando service.ts');
      this.fs.copyTpl(
        this.templatePath('service.ts1'),
        this.destinationPath(basePath + '.service.ts'),
        props
      );
    }

    if (this.configGenerator.css) {
      this.log('Generando scss');
      this.fs.copyTpl(
        this.templatePath('scss.scss'),
        this.destinationPath(basePath + '.component.scss'),
        props
      );
    }

    if (this.configGenerator.backEndCrud) {
      this.log('Generando backend');
      this.composeWith(require.resolve('../backEndCrud'), this.configGenerator);
    }
  }

  install() {}
};
