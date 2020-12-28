import React from 'react';
import ReactDOM from 'react-dom';

import css from './main.css';

console.log(css.toString());

const App = () => <h1>Hello World!</h1>

ReactDOM.render(<App />,
  document.getElementById('root'));