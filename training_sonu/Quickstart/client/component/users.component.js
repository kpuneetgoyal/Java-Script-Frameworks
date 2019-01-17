import React,{Component} from 'react';
import UserThumbnailComponent from './userthumbnail.component';

export default class UserComponent extends Component{

    constructor(props){
        super(props)
    }

    render(){
        let dataToBeDisplayed=this.props.allUsers.map((user,index)=><UserThumbnailComponent key={user.id}{...this.props} userdetails={user} userindex={index}/>);
        return <ul>{dataToBeDisplayed}</ul>
    }

}