import React,{Component} from 'react';
import UserThumbnailComponent from './userthumbnail.component';

export default class UsersComponent extends Component{
    render(){
    var usersToBeCreated = this.props.allUsers.map((user,index)=> <UserThumbnailComponent key={user.id}  {...this.props} userdetails={user} userindex={index} />)
        return <div className="container">
        <div>
        <div className="jumbotron">
                    <h1> Github Users Component</h1>
        </div> 
        </div>
            <div className="row">
            {usersToBeCreated}
            </div>
    </div>
    }
}