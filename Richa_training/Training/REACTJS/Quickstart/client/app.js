// Code Here
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Main from './Components/main.component';
import UserDetails from './Components/userdetails.components';

import {Provider} from 'react-redux';
import store from './Store/store';

import {Router,Route,IndexRoute,browserHistory} from 'react-router';
import app from './Components/connect';
import UserComponent from './Components/users.components';



          let router=<Provider store={store}>
                          <Router history={browserHistory}>
                              <Route path="/"  component={app}>
                                   <IndexRoute component={UserComponent}></IndexRoute>
                                   <Route path="/userdetails/:id" component={UserDetails}></Route>
                              </Route>
                        </Router>
                     </Provider>


         ReactDOM.render(router,document.getElementById('content'));