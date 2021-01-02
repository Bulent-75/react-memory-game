import React from 'react';
import ReactDOM from 'react-dom';
import DevState from './DevState';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DevState />, div);
  ReactDOM.unmountComponentAtNode(div);
});