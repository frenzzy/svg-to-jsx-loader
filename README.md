# svg-to-jsx-loader

Simple [Webpack](http://webpack.github.io/) loader that allows to load SVG files as [React](http://facebook.github.io/react/) components with [svg-to-jsx](https://github.com/janjakubnanista/svg-to-jsx).

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
      'babel-loader',
      'svg-to-jsx-loader'
    ]
  }
]
```

### Input example

```svg
<!-- forward-icon.svg -->
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <path d="M21 11l-7-7v4C7 9 4 14 3 19c2.5-3.5 6-5.1 11-5.1V18l7-7z"/>
</svg>
```

### Output example

```js
import React from 'react';

class Svg extends React.Component {
  render() {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" {...this.props}>
        <path d="M21 11l-7-7v4C7 9 4 14 3 19c2.5-3.5 6-5.1 11-5.1V18l7-7z"/>
      </svg>
    );
  }
};

export default Svg;
```

## Inspiration

- [svg-jsx-loader](https://github.com/janjakubnanista/svg-jsx-loader)
- [react-svg-loader](https://github.com/boopathi/react-svg-loader)
- [svg-to-jsx](https://github.com/janjakubnanista/svg-to-jsx)

## License

MIT (http://www.opensource.org/licenses/mit-license.php)
