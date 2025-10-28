import { useState } from "react"

export default function Counter(){
// let [stateVariable, setStateVariable] = useState(10);
let [count , setCount] = useState(0);

let incCount = () => {
    setCount(count + 1);
}

    return(
        <>
            <h3>Count = {count }</h3>
            <button onClick={incCount}>Increase Count</button>
        </>
        
    )
}