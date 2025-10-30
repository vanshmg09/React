import { useState } from "react";

export default function Form(){

    let [formData, setFormData] = useState({
        fullName: "",
        username: "",
        password: ""
    })

    // let handleNameChange = (event) => {
    //     setFullName(event.target.value)
    // }

    // let handleUsername = (event) => {
    //     setUsername(event.target.value)
    // }

    let handleInputChange = (event) => {
        let fieldName = event.target.name;
        let newValue = event.target.value;

        setFormData((currData) => {
            // currData.fieldName --> currData[fieldName] (compute property value)
            // currData[fieldName] = newValue;
            return {...currData , [fieldName]: newValue}
        })
    }
    
    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData)
        setFormData({
        fullName: "",
        username: "",
        password: ""
    })
    }
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">Full Name</label>
            <input placeholder="enter your full name" type="text" value={formData.fullName}  id="fullName" name="fullName" onChange={handleInputChange}/>
  
            <br />
            <br />
            <label htmlFor="username">Username</label>
            <input placeholder="enter username" type="text" value={formData.username}  id="username" name="username" onChange={handleInputChange}/>
             <br />
            <br />
            <label htmlFor="password">Password</label>
            <input placeholder="enter password" type="password" value={formData.password}  id="password" name="password" onChange={handleInputChange}/>
            <button>Submit</button>
        </form>
    )
}