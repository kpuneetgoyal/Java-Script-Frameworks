import React from 'react';

export default class MainComponent extends React.Component{
    render(){
        console.log(this.props.allUsers)
        return <div>
        <h1> Main Component </h1>
            {React.cloneElement(this.props.children,this.props)}
        </div>
    }
}

//This is container component
//Users and UserDetails are Presentational Component