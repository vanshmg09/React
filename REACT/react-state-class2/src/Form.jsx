import { useState } from "react";

export default function Form(){

    let [fullName, setFullName] = useState("vansh");

    let handleNameChange = (event) => {
        setFullName(event.target.value)
    }
    return(
        <form>
            <input placeholder="enter your full name" type="text" value={fullName} onChange={handleNameChange}/>
            <button>Submit</button>
        </form>
    )
}