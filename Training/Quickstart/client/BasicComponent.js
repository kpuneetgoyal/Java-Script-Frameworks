import React from 'react';

//There are two kinds of export
//1. named export
//2. default export
//There can be maximum one possible default export per file.

//Named Export
/*export class BasicComponent extends React.Component {
    render() {
        return <h1>JSX Quick start</h1>;
    }
}*/

//Default Export - We can give alias name to default export
export default class BasicComponent extends React.Component {
    render() {
        return <h1>JSX Quick start</h1>;
    }
}

export function Add(){
    return x+y;
}

export function Product(){
    return x*y;
}
