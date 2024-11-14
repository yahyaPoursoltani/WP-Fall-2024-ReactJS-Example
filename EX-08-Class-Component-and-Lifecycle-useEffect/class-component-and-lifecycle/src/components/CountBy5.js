import React, { useState , useEffect} from 'react';
import './Box.css'; // Optional: CSS file for styling

const FunctionalCounter = () => {
    const [number, setNumber] = useState(0); // Initial number

    const incrementNumber = () => {
        setNumber(prevNumber => prevNumber + 1);
    };

    useEffect(()=>{
        console.log("Number Changed!");
        //setNumber(number+1); //Infinite Loop
        if(number!=0 && number%5===0){
            alert("5 Steps Away!");
            
        }
    },[number]);


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