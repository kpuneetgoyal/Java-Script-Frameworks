import React from 'react';
import {Link} from 'react-router';

export default class UserThumbnailComponent extends React.Component{
    
    render(){
 
   return <div className="col-md-3 column userbox">
                
               <Link to={"/userdetails/" +this.props.userdetails.id}>
                  <img src={this.props.userdetails.avatar_url} className="img-thumbnail"></img>
               </Link>
        <div className="usertitle">{this.props.userdetails.type}</div>
        <div className="userrow">
                <b>
                {this.props.userdetails.login}
                </b>
                <button onClick={this.props.IncrementFollowers.bind(this,this.props.userindex)}>{this.props.userdetails.followers}</button>
                </div>
                
                
         </div>


    }
}