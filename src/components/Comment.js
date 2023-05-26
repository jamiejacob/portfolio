import { useState } from "react";

function Comment() {
  const [comment, setComment] = useState("");
  const [comments,setComments]=useState([])

  function submitComment() {
    setComments([...comments,comment])
    setComment("");
  }

  return (
    <>
      <div style={{ paddingTop: "50px",textAlign:"center"}}>
        <h5>Leave a comment</h5>
       
        <textarea
          placeholder="Enter your comments"
          rows="3"
          columns="60"
          maxLength="40"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          
        ></textarea>
        <div>
        <button onClick={submitComment}>Submit</button>
        </div>
      </div>

      <div className="post-it">
        <ul>
          {comments.map((comment, index) => (
            <li key={index + 1}>
              <p>{comment}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}


export default Comment;
