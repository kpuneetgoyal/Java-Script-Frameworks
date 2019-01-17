import React,{Component} from 'react';

export default class UserDetailsComponent extends React.Component{
    render(){
        let userId = this.props.params.id;
        let currUser=this.props.allUsers.find(
            u=> u.id == userId
        )

        let index=this.props.allUsers.findIndex(u=>u.id == userId)
   return  <div className="container">
                  <div className="row">
                      <div className="col-md-10">
                           <img src={currUser.avatar_url}>User Detail Component!!!  {currUser.login}</img>
                      </div>
                  </div>
                  <div className="row">
                  <div className="col-md-6">
                       <h1>Type:{currUser.login}</h1>
                  </div>
              </div>
              <div className="row">
              <div className="col-md-6">
                   <h1>Type:{currUser.type}</h1>
              </div>
          </div>

          <div className="row">
              <div className="col-md-6">
                   <button className="btn btn-danger" onclick={this.props.IncrementFollower.bind(this,index)}>{currUser.followers}</button>
              </div>
          </div>
            </div>
    }
}