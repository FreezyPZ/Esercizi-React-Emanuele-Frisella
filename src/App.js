import React from "react";
import { Welcome } from "./Welcome";
import { Age } from "./Age";

export class App extends React.Component{
    render(){
        return (
            <div>
               <Welcome name={<strong>Emanuele</strong>} age={21} />
            </div>
        )
    }
}