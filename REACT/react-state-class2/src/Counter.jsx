import { useEffect, useState } from "react"

export default function Counter(){

    let [count, setCount] = useState(0);

    useEffect(function printSomething() {
        console.log("This is side-effect");
    })

    let incCount = () => {
        setCount((currCount) => currCount + 1)
    }

    return(
        <div>
            <h3>count = {count}</h3>
            <button onClick={incCount}>+1</button>
        </div>
    )
}