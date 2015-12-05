# svg-to-jsx-loader

[Webpack](http://webpack.github.io/) loader that allows to load SVG files as [stateless functional](https://facebook.github.io/react/blog/2015/10/07/react-v0.14.html#stateless-functional-components) [React](http://facebook.github.io/react/) components with [svg-to-jsx](https://github.com/janjakubnanista/svg-to-jsx).

[![Build Status](https://travis-ci.org/frenzzy/svg-to-jsx-loader.svg?branch=master)](https://travis-ci.org/frenzzy/svg-to-jsx-loader)

## Installation

```shell
$ npm install svg-to-jsx-loader --save-dev
```

## Usage

Webpack documentation: [Using loaders](http://webpack.github.io/docs/using-loaders.html)

In your `webpack.config.js`, add the `svg-to-jsx-loader`, chained with the [`babel-loader`](https://babeljs.io/docs/setup/#webpack):

```js
loaders: [
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
loaders: [
  {
    test: /\.(js|svg)$/i,
    loader: 'babel-loader', // v6 or later
    query: {
      presets: ['react', 'es2015']
    },
    plugins: [
      'transform-runtime'
    ]
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
<!-- forward-icon.svg -->
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 24 24" width="24" height="24">
  <path d="M21 11l-7-7v4C7 9 4 14 3 19c2.5-3.5 6-5.1 11-5.1V18l7-7z"/>
</svg>
```

### Output example

```js
import React from 'react';

const ForwardIcon = (props) => (
  <svg height="24" width="24" version="1.1" viewBox="0 0 24 24" {...props}>
    <path d="M21 11l-7-7v4C7 9 4 14 3 19c2.5-3.5 6-5.1 11-5.1V18l7-7z"/>
  </svg>
);

export default ForwardIcon;
```

## Inspiration

- [svg-jsx-loader](https://github.com/janjakubnanista/svg-jsx-loader)
- [react-svg-loader](https://github.com/boopathi/react-svg-loader)
- [svg-to-jsx](https://github.com/janjakubnanista/svg-to-jsx)

## License

This source code is licensed under the MIT license found in the [LICENSE.txt](https://github.com/frenzzy/svg-to-jsx-loader/blob/master/LICENSE.txt) file.
