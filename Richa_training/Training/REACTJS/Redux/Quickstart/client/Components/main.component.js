import React from 'react';

export default class MainComponent extends React.Component{
    render(){
   return   <div>
           <h1>Main Component!!!</h1>
           {this.props.child}
           </div>
    }
}