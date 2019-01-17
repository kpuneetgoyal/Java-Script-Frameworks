import React,{Component} from 'react';

export default class UserDetailsComponent extends Component{
    render(){
        let theUserId=this.props.params.id;
        let currUser=this.props.allUsers.find(
            u=>u.id==theUserId)
        return <h1>UserDetails Component for {currUser.login}</h1>
    }

}