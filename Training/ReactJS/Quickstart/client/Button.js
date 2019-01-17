import React from 'react';
export default class Button extends React.Component {

    constructor(props){
        super(props);
        this.state={count:this.props.initialCount}
        /* state is immutable so every time when we change the value it refers to new value.
        /* state is member variable so we cannot use the state value directly in another method 
         if components are related then we can only use the state by using props else we */
    }

    ClickHandler(){
        console.log("U Clicked");
       // this.state.count++;
          this.setState({count : this.state.count+1});
        //this.props.countNumber++;
        /*because props are read only so we can't change the value of props and for 
        /*when we need to change the value of any component then we use states. */
    }

    render() {
        return <button className="btn btn-primary" onClick={this.ClickHandler.bind(this)}>{this.state.count}</button>;
    }
}
