import { useState } from "react"
import { validate } from "uuid";
import { useFormik } from "formik";

export default function CommentsForm({addNewComment}) {
    // let [formData, setFormData] = useState({
    //     username: "",
    //     remarks: "",
    //     rating: 5
    // });

     const validate = values => {
   const errors = {};
 
   if (!values.username) {
     errors.username = 'Username cannot be empty';
   }
 
   return errors;
 };

    const formik = useFormik({
        initialValues: {
            username: "",
            remarks: "",
            rating: 5
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        }
    });


    // let handleInputChange = (event) => {
    //     let fieldName = event.target.name;
    //     let newValue = event.target.value;

    //     setFormData((currData) => {
    //         return {...currData, [fieldName]: newValue}
    //     })
    // }

    // let handleSubmit = (event) => {
    //     console.log(formData);
    //     addNewComment(formData);
    //     event.preventDefault();
    //     setFormData({
    //     username: "",
    //     remarks: "",
    //     rating: 5
    // });
    // }

    return(
        <div>
            <h3>Give Comment!</h3>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" placeholder="username" value={formik.values.username} onChange={formik.handleChange} id="username" name="username"/>
                <br /><br />

                {formik.errors.username ? <p style={{color: "red"}}>{formik.errors.username}</p> : null }

                <label htmlFor="remark">Remarks</label>
                <textarea value={formik.values.remarks} placeholder="Add few remark" onChange={formik.handleChange} id="remarks" name="remarks"></textarea>
                <br /><br />

                <label htmlFor="rating">Rating</label>
                <input type="number" placeholder="rating" max={5} min={1} value={formik.values.rating} onChange={formik.handleChange} id="rating" name="rating"/>
                <br /><br />

                <button type="submit">Add Comment</button>
            </form>
        </div>
    )
}