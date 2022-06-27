import React from "react";
import { Counter } from "./counter";

export class App extends React.Component{
    render(){
        return(<>
            <Counter initialValue={0} incrementAmount={0.5} incrementInterval={360}/>
            </>)
    }
}