import React from 'react';
import ButtonComponent from './ButtonComponent';
export class ButtonComponentList extends React.Component {
    constructor(props) {
        super(props);  
        /*this.state = {listofButtons:[
            { id:1 , newcount: 100 },
            { id:2 , newcount: 200 },
            { id:3 , newcount: 300 },
            { id:4 , newcount: 400 },
            { id:5 , newcount: 500 }
        ]};*/
    }

    //This is a life cycle method and will get call after constructor. Then render method will be called
    //componentDidMount will be called after render() method.
    componentWillMount(){
        this.state = {listofButtons:[
            { id:1 , newcount: 100 },
            { id:2 , newcount: 200 },
            { id:3 , newcount: 300 },
            { id:4 , newcount: 400 },
            { id:5 , newcount: 500 }
        ]};
    }

    /*******************************************************************************************
     * whenever we call setstate  render gets called
     * This method should return a value. Other methods of lifecycle may not return any value.
     * This will return true / false. 
     * if you return false. your UI will not update.
     * setstate() -> shouldComponentUpdate() -> render()
     *********************************************************************************************/
    shouldComponentUpdate(){

    }

    DeleteIndividualButtonHandler(id){
       console.log("24eqwr");
        let theNewButtonList = this.state.listofButtons.filter(e=> e.id!=id)
        this.setState({listofButtons:theNewButtonList}); 
    }
    DeleteButtonHandler(){
        let oldButtonValue = this.refs.txtInput.value;
        let theNewButtonList = this.state.listofButtons.filter(e=> e.newcount != oldButtonValue);
        this.setState({listofButtons:theNewButtonList}); 
    }
    AddButtonHandler(){
        let newButtonValue = this.refs.txtInput.value; 
        let lengthofTheArray = this.state.listofButtons.length;
        let newButtonId = this.state.listofButtons[lengthofTheArray-1].id;
        newButtonId++;
        let newButton = {id: newButtonId, newcount:newButtonValue};
        this.setState({listofButtons:[...this.state.listofButtons,newButton]})
    }

    AddNewState(){
        console.log(this.refs.txtInput.value);
        let newButtonValue = this.refs.txtInput.value; 
        let newButton = {newcount:newButtonValue};
        this.setState({listofButtons:[...this.state.listofButtons,newButton]})
    }
    render() {
        //let buttoninstance = this.state.listofButtons.map((b) => <ButtonComponent newcount={b.newcount}/>);

        //The items we are iterating expects unique key. Although this is not a best practice
        let buttoninstance = this.state.listofButtons.map((buttonObject,id) => <ButtonComponent 
        ButtonDetails={buttonObject}
        newcount={buttonObject.newcount}
        key={buttonObject.id}
        LinktoParentHandler={this.DeleteIndividualButtonHandler.bind(this)}/>);

        //Now try to delete an element from the collection

        return <div>
        Enter New Number : <input type="text" className="form-control"
        ref="txtInput"/>
        
        <input type="button"
         value="Add"
         className="btn btn-success"
         onClick={this.AddButtonHandler.bind(this)}/>
         
         <button className="btn btn-danger" onClick={this.DeleteButtonHandler.bind(this)}>
            <span className="glyphicon glyphicon-trash">
            </span>
        </button>
            {buttoninstance}
        </div>
    }
}
