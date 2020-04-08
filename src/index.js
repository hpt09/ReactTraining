import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './components/Home';
import Login from './TrackerLogin';
import TrackerLogin from './components/Login'
import LanguageContextProvider from './context/LanguageContext';
import App from './App'
import About from './components/About'
import * as serviceWorker from './serviceWorker';
import TrackerHome from './TrackerHome';
import Tracker from './Tracker';

ReactDOM.render(
<Router>
  <LanguageContextProvider>
  <Route exact path = "/" component = {Login} />
  <Route path = "/home" component = {Tracker } />
  </LanguageContextProvider>
</Router>
, document.getElementById('root'));
serviceWorker.unregister();
