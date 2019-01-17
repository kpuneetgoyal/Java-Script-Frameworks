import React from 'react';

export default class UserThumbnailComponent extends React.Component{
    render(){
        console.log(this.props.allUsers)
        return <table border="2"><tr>
            <td><a href="/userdetails">{this.props.userdetails.login}</a></td>
            <td><button onClick={this.props.IncrementFollowers.bind(this,this.props.userindex)}>
                    {this.props.userdetails.followers}
                </button>
            </td>
            </tr></table>
    }
}
