import 'babel-polyfill';
import React from 'react';
import { Route, IndexRoute } from 'react-router'
import App from './components/App.js'
import HomePage from './components/home/HomePage.js'
import AboutPage from './components/about/AboutPage.js'
import RequestsPage from './components/request/RequestsPage.js'
import ManageRequestPage from './components/request/ManageRequestPage.js'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={HomePage} />
    <Route path = 'about' component={AboutPage} />
    <Route path = 'books' component={RequestsPage} />
    <Route path = 'new' component={ManageRequestPage} />
    <Route path = 'request/:id' component={ManageRequestPage} />
  </Route>
)
