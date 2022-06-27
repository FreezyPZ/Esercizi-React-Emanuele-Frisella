import React from "react";
import { counter } from "./counter";

export class CounterDisplay extends React.Component {
    render() {
        return (
            <div>
                <h1>Count: {this.props.displayCount}</h1>
            </div>
        )
    }
}