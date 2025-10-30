import { useState } from "react";

export default function Form(){

    let [fullName, setFullName] = useState("");

    let handleNameChange = (event) => {
        setFullName(event.target.value)
    }
    return(
        <form>
            <label htmlFor="fullName">Full Name</label>
            <input placeholder="enter your full name" type="text" value={fullName} onChange={handleNameChange} id="fullName"/>
            <button>Submit</button>
        </form>
    )
}