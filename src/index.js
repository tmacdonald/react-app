import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './App';
import About from './modules/About';
import Repos from './modules/Repos';
import './index.css';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/about" component={About}/>
    <Route path="/repos" component={Repos}/>
  </Router>,
  document.getElementById('root')
);
