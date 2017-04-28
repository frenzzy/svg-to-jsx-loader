# svg-to-jsx-loader

[Webpack](https://webpack.js.org/) loader that allows to load SVG files as [stateless functional](https://facebook.github.io/react/blog/2015/10/07/react-v0.14.html#stateless-functional-components) [React](http://facebook.github.io/react/) components with [svg-to-jsx](https://github.com/janjakubnanista/svg-to-jsx).

[![NPM version](http://img.shields.io/npm/v/svg-to-jsx-loader.svg?style=flat-square)](https://www.npmjs.com/package/svg-to-jsx-loader)
[![NPM downloads](http://img.shields.io/npm/dm/svg-to-jsx-loader.svg?style=flat-square)](https://www.npmjs.com/package/svg-to-jsx-loader)
[![Build Status](http://img.shields.io/travis/frenzzy/svg-to-jsx-loader/master.svg?style=flat-square)](https://travis-ci.org/frenzzy/svg-to-jsx-loader)
[![Coverage Status](https://img.shields.io/coveralls/frenzzy/svg-to-jsx-loader.svg?style=flat-square)](https://coveralls.io/github/frenzzy/svg-to-jsx-loader)
[![Dependency Status](http://img.shields.io/david/frenzzy/svg-to-jsx-loader.svg?style=flat-square)](https://david-dm.org/frenzzy/svg-to-jsx-loader)

## Installation

Using [npm](https://www.npmjs.com/):

```shell
$ npm install svg-to-jsx-loader --save-dev
```

## Usage

Webpack documentation: [Using loaders](https://webpack.js.org/concepts/loaders/)

In your `webpack.config.js`, add the `svg-to-jsx-loader`, chained with the [`babel-loader`](https://babeljs.io/docs/setup/#webpack2):

```js
rules: [
  {
    test: /\.svg$/,
    loaders: [
      'babel-loader', // v5
      'svg-to-jsx-loader'
    ]
  }
]
```

Or you can find a working example in [test/webpack.config.js](https://github.com/frenzzy/svg-to-jsx-loader/blob/master/test/webpack.config.js) file:

```js
rules: [
  {
    test: /\.(js|svg)$/i,
    loader: 'babel-loader', // v6 or later
    exclude: /node_modules/,
    query: {
      presets: ['react']
    }
  },
  {
    test: /\.svg$/i,
    loader: 'svg-to-jsx-loader'
  }
]
```

### Input example

```svg
<?xml version="1.0" encoding="iso-8859-1"?>
<!-- 001-forward-icon.svg -->
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 24 24" width="24" height="24">
  <path d="M21 11l-7-7v4C7 9 4 14 3 19c2.5-3.5 6-5.1 11-5.1V18l7-7z"/>
</svg>
```

### Output example

```js
import React from 'react';

function ForwardIcon(props) {
  return (
    <svg height="24" width="24" version="1.1" viewBox="0 0 24 24" {...props}>
      <path d="M21 11l-7-7v4C7 9 4 14 3 19c2.5-3.5 6-5.1 11-5.1V18l7-7z"/>
    </svg>
  );
}

export default ForwardIcon;
```

## Inspiration

- [svg-jsx-loader](https://github.com/janjakubnanista/svg-jsx-loader)
- [react-svg-loader](https://github.com/boopathi/react-svg-loader)
- [svg-to-jsx](https://github.com/janjakubnanista/svg-to-jsx)

## License

This source code is licensed under the MIT license found in the [LICENSE.txt](https://github.com/frenzzy/svg-to-jsx-loader/blob/master/LICENSE.txt) file.
