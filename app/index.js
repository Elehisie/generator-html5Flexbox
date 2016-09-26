var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  writing: function () {
    console.log('Creating basic files...');
    this.fs.copyTpl(
      this.templatePath('favicon.ico'),
      this.destinationPath('favicon.ico')
    );
    
    this.fs.copyTpl(
      this.templatePath('index.html'),
      this.destinationPath('index.html')
    );
    
    this.fs.copyTpl(
      this.templatePath('scripts/main.js'),
      this.destinationPath('scripts/main.js')
    );
    
    this.fs.copyTpl(
      this.templatePath('styles/layout.css'),
      this.destinationPath('styles/layout.css')
    );
  }
});
