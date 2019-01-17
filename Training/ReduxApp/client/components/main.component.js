import React from 'react';

export default class MainComponent extends React.Component{

    componentDidMount(){
        this.props.FetchUserData();
    }

    render(){
        return <div>
            <h1> Main Component </h1>
             {React.cloneElement(this.props.children,this.props)}
            </div>
    }
}