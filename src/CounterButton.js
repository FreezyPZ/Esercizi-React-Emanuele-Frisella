import React from "react";

export class CounterButton extends React.Component{
    render(){
        return(
            <div>
                <button onClick={this.props.counterButton}>Click</button>
            </div>
        )
    }
}