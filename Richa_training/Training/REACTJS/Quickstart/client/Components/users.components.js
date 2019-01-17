import React from 'react';
import UserThumbnailComponent from './userthumbnail';

export default class UserComponent extends React.Component{
    constructor(props){
        super();
        //this.state={UsersList:this.props.allUsers};
    }

    render(){

        let loginshown=this.props.allUsers.map((user,index) => <UserThumbnailComponent key={user.id}
        {...this.props} userdetails={user} userIndex={index}/>);
        
   return <div>
                <h1>User Component!!!</h1>
                <ul>
                {loginshown}
                </ul>
         </div>


    }
}