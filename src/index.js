import React from 'react';
import ReactDOM from 'react-dom';

import css from './main.scss';

console.log(css);

const App = () => <h1>Hello World!</h1>

ReactDOM.render(<App />,
  document.getElementById('root'));