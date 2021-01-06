import React from 'react';
import ReactDOM from 'react-dom';
import UserSelect from './UserSelect';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UserSelect />, div);
  ReactDOM.unmountComponentAtNode(div);
});