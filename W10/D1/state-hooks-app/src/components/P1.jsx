import { useState } from "react";
//useState Basics
//its a react hook that adds state to functional component
//returns an array with 2 values
//1. current state value
//2. Function to update state
//Syntax:
//const [stateValue, setStateValue] = useState(initialValue);
export function UseStateBasics(){
    //counter
    const [count,setCount ] = useState(0);
    return(
        <>
        <h2>useState Basics</h2>
        <p>Count: {count}</p>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        </>
    )
}