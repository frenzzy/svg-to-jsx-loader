var expected = (
  'import React from \'react\';\n\n' +

  'const ForwardIcon = (props) => (' +
  '<svg height="24" width="24" version="1.1" viewBox="0 0 24 24" {...props}>' +
  '\n\t<path d="M21 11l-7-7v4C7 9 4 14 3 19c2.5-3.5 6-5.1 11-5.1V18l7-7z"/>\n' +
  '</svg>' +
  ');\n\n' +

  'export default ForwardIcon;\n'
);

module.exports = function(actual) {

  console.assert(
    actual === expected,
    'svg-to-jsx-loader should return stateless functional react component' +
    '\n\n==> Actual result:\n' + actual +
    '\n\n==> Expected result:\n' + expected
  );

  return actual;
};
