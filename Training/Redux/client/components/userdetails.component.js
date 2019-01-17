import {Component} from 'react';
import React from 'react';

export default class UserDetails extends Component{

    constructor(props){
        super(props);
    }

    render(){
        //return <h2> User Details !!!! </h2>
        let userIdPassed = this.props.params.id;
        let currentUser = this.props.allUsers.find(user => user.id == userIdPassed);
        
        return <div className="container">   
                    <h2> Users Details are !!!!</h2>
                    <ul> {currentUser.login} </ul>
                    <ul> {currentUser.followers} </ul>
                    <ul> {currentUser.node_id} </ul>
                    <ul> {currentUser.avatar_url} </ul>
                    <ul> {currentUser.events_url} </ul>
                </div>
    }
    
}