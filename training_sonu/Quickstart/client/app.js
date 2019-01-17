// Code Here
import React from 'react';
import ReactDOM from 'react-dom';
import Main from './component/main.component';
import Users from './component/users.component';
import UserDetails from './component/userdetails.component';
import {Router,Route,IndexRoute,browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import store from './store/store';
import app from './component/connect';

var route=  <Provider store={store}>
                <Router history={browserHistory}>
                    <Route path="/" component={app}>
                        <IndexRoute component={Users}></IndexRoute>
                        <Route path="/userdetails/:id" component={UserDetails}></Route>
                    </Route>
                </Router>
            </Provider>
ReactDOM.render(route,document.getElementById('content'));
