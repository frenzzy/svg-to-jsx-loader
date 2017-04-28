const path = require('path');
const svgToJsx = require('svg-to-jsx');

function toUpperCamelCase(string) {
  return string.split(/[^a-zA-Z]+/).map(word =>
    word && word[0].toUpperCase() + word.slice(1)
  ).join('');
}

module.exports = function loader(content) {
  this.cacheable();

  const callback = this.async();
  const fileName = path.basename(this.resourcePath, '.svg');
  const componentName = toUpperCamelCase(fileName) || 'Svg';

  svgToJsx(content, (err, jsx) => {
    if (err) {
      callback(err);
      return;
    }

    callback(null,
      `import React from 'react';\n` +

      `function ${componentName}(props) {` +
      `  return (${jsx.replace(/(<svg[^>]*)(>)/i, '$1 {...props}$2')});` +
      `}\n` +

      `export default ${componentName};`
    );
  });
};

module.exports.raw = true;
