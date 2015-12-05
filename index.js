var svgtojsx = require('svg-to-jsx');
var path = require('path');

function toUpperCamelCase(string) {
  return string.split(/[^a-zA-Z]+/).map(function (str) {
    return str[0].toUpperCase() + str.slice(1);
  }).join('');
}

module.exports = function (content) {
  this.cacheable();

  var callback = this.async();
  var fileName = path.basename(this.resourcePath, '.svg');
  var componentName = toUpperCamelCase(fileName) || 'Svg';

  svgtojsx(content, function (err, jsx) {
    if (err) return callback(err);

    callback(null,
      'import React from \'react\';\n\n' +

      'const ' + componentName + ' = (props) => (' +
      jsx.replace(/(<svg[^>]*)(>)/i, '$1 {...props}$2') +
      ');\n\n' +

      'export default ' + componentName + ';\n'
    );
  });
};

module.exports.raw = true;
