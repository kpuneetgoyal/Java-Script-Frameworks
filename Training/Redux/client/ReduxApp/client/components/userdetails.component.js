import React, {Component} from 'react';

export default class UserDetailsComponent extends Component{
    render(){
        let theUserId = this.props.params.id; // fetch id params from url !
        let currUser = this.props.allUsers.find(
            u=> u.id == theUserId
        );
        let index = this.props.allUsers.findIndex(u=>u.id == theUserId)
        return <div className="container">
        <div className="row">
            <div className="col-md-10">
                <img src={currUser.avatar_url} className="img-thumbnail"/>
            </div>    
            <div className="col-md-2">                       
            </div>                    
        </div>
        <div className="row">
            <div className="col-md-6">
            <h1> Name :  {currUser.login}</h1>
            </div>
        </div>
        <div className="row">
            <div className="col-md-6">
            <h1> Type: {currUser.type}</h1>
            </div>
        </div>
        <div className="row">
            <div className="col-md-6">
            <button  className="btn btn-danger" 
            onClick={this.props.IncrementFollowers.bind(this,index)} >
                            {currUser.followers}
                            <span className="glyphicon glyphicon-user">

                            </span>
            </button>
            </div>
        </div>
        
    </div>
    }
}