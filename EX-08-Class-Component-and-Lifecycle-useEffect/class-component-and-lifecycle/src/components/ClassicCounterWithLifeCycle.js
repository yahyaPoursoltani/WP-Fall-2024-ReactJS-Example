import React, { Component } from 'react';
import './Box.css'; // Optional: CSS file for styling

class ClassicCounterWithLifeCycle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0 // Initial number
        };
        console.log('LOG : Constructor: Component is being constructed.');
    }

    componentDidMount() {
        console.log(`LOG: componentDidMount: Component has been mounted.  Number IS ${this.state.number}`);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(`LOG : componentDidUpdate: Component has been updated.  Number IS ${this.state.number}`);
        //console.log('Previous State:', prevState);
        //console.log('Current State:', this.state);
        //this.setState(prev=>prev.number+1); //Error - Stackoverflow!
    }

    componentWillUnmount() {
        console.log(`LOG : componentWillUnmount: Component will be unmounted Number IS ${this.state.number}`);
    }

    

    incrementNumber = () => {
        this.setState((prevState) => ({ number: prevState.number + 1 }));
    };

    render() {
        console.log(`LOG : Rendering ...  Number IS ${this.state.number}`);
        const { number } = this.state;

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

export default ClassicCounterWithLifeCycle;