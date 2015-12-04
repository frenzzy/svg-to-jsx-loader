var svgtojsx = require('svg-to-jsx');

module.exports = function (content) {
  this.cacheable && this.cacheable();

  var callback = this.async();

  svgtojsx(content, {passProps: true}, function (err, jsx) {
    if (err) {
      callback(err);
    } else {
      callback(null,
        'import React from "react";' +

        'class Svg extends React.Component {' +
        '  render() {' +
        '    return (' + jsx + ');' +
        '  }' +
        '};' +

        'export default Svg;'
      );
    }
  });
};

module.exports.raw = true;
