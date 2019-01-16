import React from 'react';

export default class ButtonComponent extends React.Component{

    ClickHandler(){
        console.log("you clicked");
        
        //this.props.count++;
        /***************************************************************************
        *Props are read only. we cannot change anything using props.
        *state can be changed. if we want to change anything in UI, we should use state rather than Props
        *state is private to every component.
        *state is a member variable so we cannot use directly state variable inside any method.
        *we can initialize a state using props
        *****************************************************************************************************/

        //this.state.count++
        /**************************************************************************************************
         * This is again wrong. Because state are immuatable in React. Just like Strings are immutable in Java
         * we cannot change the original value of the state
         * but we can pass the new value to the state. We cannot update the state.
         ***************************************************************************************************/

         this.setState({count:this.state.count+1});
         this.setState({newcount:this.state.newcount+1});

         /*********************************************************
          * Hence when we want to change the UI , change the state.
          * Use Props to get/accept the values but not to update the state and do not change the original value of the state.
          * we always can assign a new value to it.
          *********************************************************/
    }

    //constructor(){
        constructor(props){
        //super();
        super(props);
        //this.state = {count:100}
        //this.state = {count:this.props.initialCount}
        this.state = {count:this.props.newcount}
        this.basicCount = 0;
    }

    render(){
        //return <button onClick={this.ClickHandler.bind(this)}>{this.props.count}</button>
        return <div>
        <button className="btn btn-primary" onClick={this.ClickHandler.bind(this)}> {this.state.count}</button>
        <span className="glyphicon glyphicon-trash btn btn-danger" onClick={()=>this.props.LinktoParentHandler(this.props.ButtonDetails.id)}></span>
        </div>
    }
}


