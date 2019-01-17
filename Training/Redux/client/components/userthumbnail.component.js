import React from 'react';
import {Link} from 'react-router';

export default class UserThumbnailComponent extends React.Component{
    render(){
        console.log(this.props.allUsers)
        return <table border="2"><tr>
            <td><Link to={"/userdetails/"+this.props.userdetails.id}>
                    {this.props.userdetails.login}
                </Link>
            </td>
            <td><button onClick={this.props.IncrementFollowers.bind(this,this.props.userindex)}>
                    {this.props.userdetails.followers}
                </button>
            </td>   
            </tr></table>
    }
}
