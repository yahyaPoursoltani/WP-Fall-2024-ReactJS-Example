import React, { useState } from 'react';
import './Box.css'; // Optional: CSS file for styling

const FunctionalCounter = () => {
    const [number, setNumber] = useState(0); // Initial number

    const incrementNumber = () => {
        setNumber(number + 1);
    };

    return (
        <div className="box-container">
            <div className="box">
                <h1>{number}</h1>
                <button onClick={incrementNumber}>Increase</button>
            </div>
        </div>
    );
};

export default FunctionalCounter;