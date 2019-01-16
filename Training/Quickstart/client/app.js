// Code Here
import React from 'react';
import ReactDOM from 'react-dom';
import ButtonComponent,{} from './ButtonComponent';
import { ButtonComponentList } from "./ButtonComponentList";


//Named Export usage
//import { BasicComponent } from './BasicComponent';

//Default Export usage
import Basic,{Add,Product} from './BasicComponent';

//Named Export usage
//ReactDOM.render(<BasicComponent/>,document.getElementById('content'));  

//Default Export usage
//ReactDOM.render(<ButtonComponent count="10" />,document.getElementById('content'));  

//Pass value as a string
//ReactDOM.render(<ButtonComponent initialCount="10" />,document.getElementById('content'));  

//Pass value as a Number
ReactDOM.render(<ButtonComponent initialCount={10} />,document.getElementById('content'));  

ReactDOM.render(<ButtonComponentList />,document.getElementById('content'))
