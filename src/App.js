import React from "react";
import { HelloWorld } from "./HelloWorld";
import { Sum } from "./sum";
import { HelloWorldappended } from "./HelloWorldappended";

export class App extends React.Component{
    render(){
        return (
            <div>
                <HelloWorld/>
                <Sum/>
                <HelloWorldappended />
            </div>
        )
    }
}