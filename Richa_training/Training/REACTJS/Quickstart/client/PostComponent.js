import React from 'react';
import axios from 'axios';
import {Component} from 'react';


//there could be one default function in a file
export default class PostComponent extends Component {

    constructor(props){
        super(props)
        this.state={allPosts:[]};
    }

    componentDidMount(){
       let promiseData= axios.get("https://jsonplaceholder.typicode.com/posts");
       promiseData.then(
           //(response) => {console.log(respose.data)},
           (response) => {this.setState({allPosts: response.data})},
           (err)=> {console.log(err)}
       )
    }

    render() {
        let postToBeCreated = this.state.allPosts.map((post) => 
        <div><table><tbody><tr>
        <td><b>{post.id}   :   </b></td>
        <td>{post.title}</td>
        
        </tr></tbody></table>
        </div>
        ) ;

        return <div><h1> All Posts !!</h1>
                {postToBeCreated}
                </div>
    }
}



