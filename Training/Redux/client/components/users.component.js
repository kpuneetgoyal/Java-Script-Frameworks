import * as react from 'react';
import React from 'react';
import UserThumbnailComponent from './userthumbnail.component';

export default class Users extends react.Component{

    constructor(props){
        super(props);
    }

   
    render(){
        let datatoBeDisplayed = this.props.allUsers.map((userObject,index) =>
        <UserThumbnailComponent key={userObject.id} {...this.props} userdetails={userObject} userindex={index}/>)
        return <div className="container">   
                    <h1> Users Component !</h1>
                    <ul>
                        {datatoBeDisplayed}
                    </ul>
                </div>
    }
    
}