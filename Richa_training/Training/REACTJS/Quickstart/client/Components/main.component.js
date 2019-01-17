import React,{Component} from 'react';

export default class MainComponent extends React.Component{
    render(){
        console.log(this.props.allUsers);
        console.log(this.props.allPosts);
   return   <div>
           <h1>Main Component!!!</h1>
           {React.cloneElement(this.props.children,this.props)}
           </div>
    }
}