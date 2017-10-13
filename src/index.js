import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import Routes from './Routes';
import './style.css';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

const store = configureStore();

store.dispatch({
  type: 'LOAD_REQUESTS_SUCCESS',
  requests: [
   { id:'1', title: '30 Days of JS', author: 'Wesbos', donor: 'Wesbozzy', location: 'Canada'},
   { id:'2', title: 'JS Fundamentals', author: 'Bucky Roberts', donor: 'Buckerts', location: 'California'},
   { id:'3', title: 'Eloquent JS', author: 'Marijn Haverbeke', donor: 'Havyy', location: 'New York'},
   { id:'4', title: 'Full Stack Development', author: 'Jessie Nerona', donor: 'Siegren', location: 'Australia'},
{ id:'5', title: 'React: Zero to Hero', author: 'Mary Chelle Carreon', donor: 'Chelle', location: 'Paris'},
{ id:'6', title: 'React101: from A to Zee', author: 'Ardessa V. Lorenzo', donor: 'Deatotzky', location: 'California'},
  ]
});

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={Routes} />
  </Provider>,
  document.getElementById('root')
)