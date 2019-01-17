import React from 'react';
import Course from './Course';

export default class CourseList extends React.Component {
      
    constructor(props){
        super(props);
        this.state={courseList:
            [{id:1,name : "react",price : "1000",title : "react",img : "https://www.w3schools.com/angular/pic_angular.jpg"},
             {id:2,name : "JavaScript",price : "2000",title : "JavaScript",img : "https://www.w3schools.com/angular/pic_angular.jpg"},
             {id:3,name : "Jquery",price : "3000",title : "Jquery",img : "https://www.w3schools.com/angular/pic_angular.jpg"},
             {id:4,name : "Angular",price : "4000",title : "Angular",img : "https://www.w3schools.com/angular/pic_angular.jpg"},
            ]};
    }

    componentWillMount(){
        console.log("componentWillMount Parent:")
    }
    componentDidMount(){
        console.log("componentDidMount Parent:")
    }
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate Parent:")
        return false;
    }
    componentWillUpdate(){
        console.log("componentWillUpdate Parent:")
    }
    componentDidUpdate(){
        console.log("componentDidUpdate Parent:")
    }
    
    CourseDeleteHandler(deletedId){
        /* let deleteValue=this.refs.txtInput.value;
         let newList=this.state.courseList.filter(e=>e!=deleteValue);
         this.setState({courseList:newList})
         console.log([...this.state.courseList])*/
         console.log("Inside CourseHandler"+deletedId)
         let newList=this.state.courseList.filter(e=>e.id!=deletedId);
         this.setState({courseList:newList})
         console.log([...this.state.courseList])
         newList.map((course)=>console.log(course.id));
     } 

    
    render() {
        let courseToBeCreated=this.state.courseList.map((course,index)=><Course coursedetails={course} key={course.id} LinkToCourseDeleteHandler={this.CourseDeleteHandler.bind(this)}/>)
        
        return <div className="">
              {courseToBeCreated}
        </div>
    }
}
