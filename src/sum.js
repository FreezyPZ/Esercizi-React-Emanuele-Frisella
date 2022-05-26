import React from "react";

const sum = (a,b) => a+b;

export class Sum extends React.Component{
    render(){
        return <h2>{sum(2,4)}</h2>   
    }
}