import { useState } from "react"
import "./Comment.css"
import CommentsForm from "./CommentsForm";

export default function Comment(){

    let [comments, setComments] = useState([{
        username: "@vm",
        remarks: "good job!",
        rating: 4
    }]);

    let addNewComment = (comment) => {
        setComments((currComment) => [...currComment, comment]);
        console.log("add")
    }
    return(
        <>
            <div>
                <h3>All Comments</h3>
                {comments.map((comment, idx) => (
                    <div className="comment" key={idx}>
                    <span>{comment.remarks}</span>
                    &nbsp;
                    <span>(rating = {comment.rating})</span>
                    <p>- {comment.username}</p>

                </div>
                ))}
                
            </div>
            <hr />
            <CommentsForm addNewComment={addNewComment}/>
        </>
        
    )
}