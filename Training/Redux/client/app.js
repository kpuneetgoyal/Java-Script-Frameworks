// Code Here
import React from 'react';
import ReactDOM from 'react-dom';
import {Route,Router,IndexRoute,browserHistory} from 'react-router';
import {Provider} from 'react-redux';

import Main from './components/main.component';
import Users from './components/users.component';
import UserDetails from './components/userdetails.component';
import store from './store/store';

var root1 = <Main>
    <Users />
</Main>

/*var router = <Router>
                <Route path="/" component={Main}>
                    <IndexRoute component={Users}></IndexRoute>
                <Route path="/userdetails" component={UserDetails}></Route>    
                </Route>
            </Router>
*/
/*var router = <Router history={browserHistory}>
            <Route path="/" component={Main}>
                <IndexRoute component={Users}></IndexRoute>
            <Route path="/userdetails" component={UserDetails}></Route>    
            </Route>
        </Router>            
*/
var router = <Provider store={store}>
                <Router history={browserHistory}>
                    <Route path="/" component={Main}>
                        <IndexRoute component={Users}></IndexRoute>
                        <Route path="/userdetails" component={UserDetails}></Route>    
                    </Route>
                </Router>
        </Provider>    
/**********************************************************************************************
 * Provider and Connect will go hand in hand
 * we cannot use anyof these only. we need to consumer this store as a prop in the component
 * Otherwise 'store' is just a plan old object and we cannot use this in component directly
 * component only understands props and state                
 * ****************************************************************************************** */

 /*****************************************************************************************
  * whenevr any action is dispatched (custom or defeault) , every reducer will get notified
  * 
  *****************************************************************************************/

var root2 = <Main>
    <UserDetails/>
</Main>

//ReactDOM.render(<Main />,document.getElementById("content"));
//ReactDOM.render(root1,document.getElementById("content"));
//ReactDOM.render(root2,document.getElementById("content"));
ReactDOM.render(router,document.getElementById("content"));