import React from "react";

const hello = (name) => {return "Hello " + name}


export class HelloWorldappended extends React.Component{
    render(){
        return <h1>{hello("Emanuele")}</h1>
    }
}