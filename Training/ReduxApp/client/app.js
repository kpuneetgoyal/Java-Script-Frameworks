// Code Here
import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/main.component';
import Users from './components/users.component';
import UserDetails from './components/userdetails.component';
import {Router,Route,IndexRoute,browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import store from './store/store';
import app from './components/connect';

var router = <Provider store={store}> 
                        <Router history={browserHistory}>
                            <Route path="/" component={app}>
                                    <IndexRoute component={Users}></IndexRoute>
                                    <Route path="/userdetails/:id" component={UserDetails}>
                                    </Route>
                            </Route>
                    </Router>
            </Provider> 


ReactDOM.render(router,document.getElementById('content'))