import React from 'react';
import ReactDOM from 'react-dom';
import MenuNav from './MenuNav';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MenuNav />, div);
  ReactDOM.unmountComponentAtNode(div);
});