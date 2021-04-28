import React, { Component } from 'react';
import SubCounter01 from './SubCounter01';
import SubCounter02 from './SubCounter02';


export default class CounterDidUpdate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
    }

    increment = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    decrement = () => {
        this.setState({
            counter: this.state.counter - 1
        })
    }

    componentDidMount() {
        const { counter } = this.state;
        console.log(`current counter didMount : ${counter}`);
    }

    componentDidUpdate() {
        const { counter } = this.state;
        console.log(`current counter didUpdate: ${counter}`);
    }

    render() {
        const { counter } = this.state;
        let component = counter % 2 === 0 ? <SubCounter01 counter={counter}/> : <SubCounter02 counter={counter}/>
        return (
            <>
                <h3>{counter}</h3>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
                {component}
            
            </>
        );
    }
}