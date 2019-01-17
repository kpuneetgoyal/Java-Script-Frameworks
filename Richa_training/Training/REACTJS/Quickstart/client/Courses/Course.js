import React from 'react';

export default class Course extends React.Component {

    constructor(props){
        super(props);
        this.state={count:this.props.coursedetails}
        
    }

    DeleteButtonHandler(deletedId){
        /* let deleteValue=this.refs.txtInput.value;
         let newList=this.state.courseList.filter(e=>e!=deleteValue);
         this.setState({courseList:newList})
         console.log([...this.state.courseList])
         console.log([newList])*/
     } 
componentWillMount(){
    console.log("componentWillMount Child:")
}
componentDidMount(){
    console.log("componentDidMount Child:")
}
shouldComponentUpdate(){
    console.log("shouldComponentUpdate Child:")
    return false;
}
componentWillUpdate(){
    console.log("componentWillUpdate Child:")
}
componentDidUpdate(){
    console.log("componentDidUpdate Child:")
}

    render() {
        return   <table className="row margin-left:100px"> <tbody>
                    <tr>
                      <td className="col-md-2">
                   <img src={this.props.coursedetails.img} alt={this.props.coursedetails.title} height="100" width="100">
                   </img>
                </td>
                <td className="col-md-4">
                <h2>{this.props.coursedetails.title}</h2>
                    <b>Name :</b>{this.props.coursedetails.name}<br/>
                    <b>Price :</b>{this.props.coursedetails.price}<br/>
                </td>
                <td className="col-md-2">
                <button className="btn btn-danger" onClick={()=>this.props.LinkToCourseDeleteHandler(this.props.coursedetails.id)}>
                    <span className="glyphicon glyphicon-trash"></span>
                </button>
                </td>
                </tr></tbody>
                </table>
    }
}
