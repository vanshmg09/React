import { useState } from "react"

export default function Counter(){
// let [stateVariable, setStateVariable] = useState(10);
let [count , setCount] = useState(0); // Initialization

let incCount = () => {
    // setCount((count) => {
    //     return count += 1;
    // } );

    // setCount((count) => {
    //     return count += 1;
    // } );

    // setCount((count) => {
    //     return count += 1;
    // } );

    setCount(25);

}

    return(
        <>
            <h3>Count = {count }</h3>
            <button onClick={incCount}>Increase Count</button>
        </>
        
    )
}