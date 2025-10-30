import { useState } from "react"

export default function CommentsForm({addNewComment}) {
    let [formData, setFormData] = useState({
        username: "",
        remarks: "",
        rating: 5
    });

    let handleInputChange = (event) => {
        let fieldName = event.target.name;
        let newValue = event.target.value;

        setFormData((currData) => {
            return {...currData, [fieldName]: newValue}
        })
    }

    let handleSubmit = (event) => {
        console.log(formData);
        addNewComment(formData);
        event.preventDefault();
        setFormData({
        username: "",
        remarks: "",
        rating: 5
    });
    }
    return(
        <div>
            <h3>Give Comment!</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" placeholder="username" value={formData.username} onChange={handleInputChange} id="username" name="username"/>
                <br /><br />

                <label htmlFor="remark">Remarks</label>
                <textarea value={formData.remarks} placeholder="Add few remark" onChange={handleInputChange} id="remarks" name="remarks"></textarea>
                <br /><br />

                <label htmlFor="rating">Rating</label>
                <input type="number" placeholder="rating" max={5} min={1} value={formData.rating} onChange={handleInputChange} id="rating" name="rating"/>
                <br /><br />

                <button>Add Comment</button>
            </form>
        </div>
    )
}