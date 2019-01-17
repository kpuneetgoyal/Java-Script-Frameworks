import React from 'react';
import {Link} from 'react-router';

export default class UserThumbnailComponent extends React.Component{
    render(){
        return  <div className="row">
            <div className="col-sm-3">
                <Link to={"/userdetails/"+this.props.userdetails.id}>
                    <img src={this.props.userdetails.avatar_url} className="img-thumbnail"></img>
                </Link>
            </div>
            <div className="col-sm-3">
                <span className="col-sm-6">{this.props.userdetails.login}</span> &nbsp;
            </div>
            <div className="col-sm-3">
            <button className="btn btn-primary" onClick={this.props.IncrementFollowers.bind(this,this.props.userindex)}>{this.props.userdetails.followers}</button>
            </div>
  
        
    </div>

    }
}