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
   { id:'2', title: '', author: 'Wesbos', donor: 'Wesbozzy', location: 'Canada'},
   { id:'3', title: '30 Days of JS', author: 'Wesbos', donor: 'Wesbozzy', location: 'Canada'},


  ]
});

store.dispatch({
  type: 'LOAD_BLOODS_SUCCESS',
  bloods: [
    { id: 'a1', type: 'Over the Counter' },
    { id: 'a2', type: 'Prescription' }
  ]
});


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={Routes} />
  </Provider>,
  document.getElementById('root')
)