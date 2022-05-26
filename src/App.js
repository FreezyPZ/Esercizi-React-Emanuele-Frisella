import React from "react";
import { HelloWorld } from "./HelloWorld";
import { Sum } from "./sum";

export class App extends React.Component{
    render(){
        return (
            <div>
                <HelloWorld/>
                <Sum/>
            </div>
        )
    }
}