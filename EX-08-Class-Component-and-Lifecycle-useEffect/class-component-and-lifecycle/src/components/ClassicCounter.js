import React, { Component } from 'react';
import './Box.css'; // Optional: CSS file for styling

class ClassicCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0, // Initial number
            otherState : 0
        };
        console.log(this.state)
    }

    incrementNumber = () => {
        this.setState((prevState) => ({ number: prevState.number + 1 }));
    };

    render() {
        const { number } = this.state;
        console.log(`Other State is ${this.state.otherState}`)

        return (
            <div className="box-container">
                <div className="box">
                    <h1>{number}</h1>
                    <button onClick={this.incrementNumber}>Increase</button>
                </div>
            </div>
        );
    }
}

export default ClassicCounter;