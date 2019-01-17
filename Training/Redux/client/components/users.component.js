import * as react from 'react';
import React from 'react';

export default class Users extends react.Component{

    constructor(props){
        super(props);
    }

   
    render(){
        let datatoBeDisplayed = this.props.allUsers.map((userObject,index) =>
        
        <ul key={userObject.id}>
            <li>
                <span>{userObject.login}</span> &nbsp;
                <span onClick={this.props.IncrementFollowers.bind(this,index)}>{userObject.followers}</span> &nbsp;
            </li>
        </ul>);

        return <div>
        <h1> Users Component !</h1>
        <ul>
             {datatoBeDisplayed}
        </ul>
        </div>
    }
    
}