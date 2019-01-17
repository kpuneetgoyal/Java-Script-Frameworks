import React from 'react';
import Button from './Button';

export default class ListButtonComponent extends React.Component {
      
    constructor(props){
        super(props);
        this.state={list:[10,20,30,40,50]};
    }

    AddNewButton(){
        console.log(this.refs.txtInput.value)
        // when we call th setState Method has been called it calls the render method again
        //  this.setState({list:[...this.state.list,70]})
        //this.setState({list:[...this.state.list,this.refs.txtInput.value]}) treat ref value as String
        this.setState({list:[...this.state.list,+(this.refs.txtInput.value)]})
    }

    DeleteButtonHandler(){
        let deleteValue=this.refs.txtInput.value;
        let newList=this.state.list.filter(e=>e!=deleteValue);
        this.setState({list:newList})
        console.log([...this.state.list])
        console.log([newList])
    }

    render() {
        let buttonsToBeCreated=this.state.list.map((b,i)=><Button initialCount={b} key={i}/>)
        
        return <div>
             Enter new Number : <input type="text" className="form-control" ref="txtInput"></input>
             <input type="button" value="Add" className="btn-success" onClick={this.AddNewButton.bind(this)}></input>
             <button className="btn btn-danger" onClick={this.DeleteButtonHandler.bind(this)}>
                 <span className="glyphicon glyphicon-trash"></span>
             </button>
              {buttonsToBeCreated}
        </div>
    }
}
