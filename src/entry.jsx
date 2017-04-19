/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';
// import { AppContainer } from 'react-hot-loader';
import Home from './Home';
import Header from './Header';

ReactDOM.render(
  <div>
    <Header />
    <Home />
  </div>, document.getElementById('root'));
