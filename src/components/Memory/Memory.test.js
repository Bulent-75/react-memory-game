import React from 'react';
import ReactDOM from 'react-dom';
import Memory from './Memory';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Memory />, div);
  ReactDOM.unmountComponentAtNode(div);
});