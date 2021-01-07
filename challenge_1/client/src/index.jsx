import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter as Router, Switch, Route, useParams } from "react-router-dom";
import App from '../components/App.jsx';
import FavoriteSets from '../components/FavoriteSets.jsx';
import '../components/styles/styles.css';

ReactDom.render(
  <Router>
    <Switch>
      <Route exact path='/'>
        <App />
      </Route>
      <Route path='FavoriteSets/:favorite'>
        <FavoriteSets />
      </Route>
    </Switch>
  </Router>,
  document.getElementById('app')
);


