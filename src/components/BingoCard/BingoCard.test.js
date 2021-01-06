import React from 'react';
import ReactDOM from 'react-dom';
import BingoCard from './BingoCard';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BingoCard />, div);
  ReactDOM.unmountComponentAtNode(div);
});