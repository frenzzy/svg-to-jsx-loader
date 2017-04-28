const expected = [
  // 001-forward-icon.svg
  // 003-ForwardIcon.svg
  `import React from 'react';\n` +

  `function ForwardIcon(props) {` +
  `  return (<svg height="24" width="24" version="1.1" viewBox="0 0 24 24" {...props}>` +
  `\n\t<path d="M21 11l-7-7v4C7 9 4 14 3 19c2.5-3.5 6-5.1 11-5.1V18l7-7z"/>\n` +
  `</svg>);` +
  `}\n` +

  `export default ForwardIcon;`,

  // 002-f0rward-ic0n.svg
  `import React from 'react';\n` +

  `function FRwardIcN(props) {` +
  `  return (<svg height="24" width="24" version="1.1" viewBox="0 0 24 24" {...props}>` +
  `\n\t<path d="M21 11l-7-7v4C7 9 4 14 3 19c2.5-3.5 6-5.1 11-5.1V18l7-7z"/>\n` +
  `</svg>);` +
  `}\n` +

  `export default FRwardIcN;`,

  // 003-ForwardIcon.svg
  `import React from 'react';\n` +

  `function ForwardIcon(props) {` +
  `  return (<svg height="24" width="24" version="1.1" viewBox="0 0 24 24" {...props}>` +
  `\n\t<path d="M21 11l-7-7v4C7 9 4 14 3 19c2.5-3.5 6-5.1 11-5.1V18l7-7z"/>\n` +
  `</svg>);` +
  `}\n` +

  `export default ForwardIcon;`,

  // 004.svg
  `import React from 'react';\n` +

  `function Svg(props) {` +
  `  return (<svg height="24" width="24" {...props}>` +
  `\n\t<path d="M21 11l-7-7v4C7 9 4 14 3 19c2.5-3.5 6-5.1 11-5.1V18l7-7z"/>\n` +
  `</svg>);` +
  `}\n` +

  `export default Svg;`,
];

module.exports = (actual) => {
  console.assert(
    expected.find(x => x === actual),
    `svg-to-jsx-loader should return stateless functional react component` +
    `\n\n==> Actual result:\n${actual}` +
    `\n\n==> Expected result:\n${expected}`
  );

  return actual;
};
