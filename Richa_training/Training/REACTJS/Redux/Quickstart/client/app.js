// Code Here
import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Components/main.component';
import Users from './Components/users.component';
import UserDetails from './Components/userdetails.component';
import {Router,route,IndexRoute} from 'react-router';

let root=<Main>
               <UserDetails/>
         </Main>

let root2=<Main>
               <Users/>
          </Main>

          let router=<Router>
                           <Route path="/"  component={Main}>
                               <IndexRoute component={Users}></IndexRoute>
                           </Route>
                           <Route path="/userdetails" component={UserDetails}></Route>
                     </Router>


         ReactDOM.render(root,document.getElementById('content'));