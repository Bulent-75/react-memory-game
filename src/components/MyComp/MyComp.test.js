import React from 'react';
import ReactDOM from 'react-dom';
import MyComp from './MyComp';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MyComp />, div);
  ReactDOM.unmountComponentAtNode(div);
});