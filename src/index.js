import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>    <App /> </BrowserRouter>,
  document.getElementById('root')
);

