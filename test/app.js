import React from 'react';
import ReactDOM from 'react-dom';
import Icon1 from './001-forward-icon.svg';
import Icon2 from './002-f0rward-ic0n.svg';
import Icon3 from './003-ForwardIcon.svg';
import Icon4 from './004.svg';

ReactDOM.render(
  <ul>
    <li><Icon1 /></li>
    <li><Icon2 width="64" height="64" /></li>
    <li><Icon3 fill="#61dafb" width="64" height="64" /></li>
    <li><Icon4 style={{ fill: '#61dafb' }} /></li>
  </ul>,
  document.getElementById('root')
);
