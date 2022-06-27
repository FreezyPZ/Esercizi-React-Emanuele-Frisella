import React from "react"
import { CounterDisplay } from "./CounterDisplay"

export class Counter extends React.Component {
    state = {
        count: this.props.initialValue
    };

    componentDidMount() {
        this._interval = setInterval(() => {
            this.setState((state) => {
                return {
                    count: state.count + (this.props.incrementAmount)
                }
            })
        }, this.props.incrementInterval)
    }

    componentDidUpdate() {
        if (this.state.count === this.props.initialValue * 10   ) {
            this.setState(() => {
                return {
                    count: this.props.initialValue
                }
            })
        }
    }


    componentWillUnmount() {
        if (this._interval) {
            clearInterval(this._interval)
        }
    }

    render() {
        return (
            <div>
                <CounterDisplay displayCount={this.state.count}/>
            </div>
        )
    }
}

Counter.defaultProps = {
    initialValue: 0,
    incrementAmount: 1,
    incrementInterval: 1000
}