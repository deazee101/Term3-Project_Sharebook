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
    { id:'1', title: 'Ibuprophen', author: 'a1', donor: '500 mg tab', location: '644'},
    // { id:'2', title: 'Paracetamol', bloodId: 'a2', description: '500 mg tab', location: '322'},
    // { id:'3', title: 'Fenofibrate', bloodId: 'a1', description: '200 mg tab', location: '323'},
    // { id:'4', title: 'Simvastatine', bloodId: 'a2', description: '20 mg cap', location: '12'},
    // { id:'5', title: 'Amlodopine', bloodId: 'a1', description: '10 mg tab', location: '644'},
    // { id:'6', title: 'Nifedipine', bloodId: 'a1', description: '10 mg cap', location: '322'},
    // { id:'7', title: 'Salbutamol', bloodId: 'a1', description: '100 mcg Inhaler', location: '243'},
    // { id:'8', title: 'Naproxen', bloodId: 'a1', description: '500 mg cap', location: '23'}
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