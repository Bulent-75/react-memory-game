import React from 'react';
import ReactDOM from 'react-dom';
import DpConnect from './DpConnect';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DpConnect />, div);
  ReactDOM.unmountComponentAtNode(div);
});