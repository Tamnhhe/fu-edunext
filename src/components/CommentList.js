import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const CommentList = ({ questionId }) => {
  const { comments, getUserNameById } = useContext(UserContext);

  // Filter comments for the specific question
  const filteredComments = comments.filter(comment => comment.questionid === questionId);
  console.log(comments);
  console.log(questionId);
  console.log(filteredComments);
  return (
    <div className="container mt-4">
      <h3>Comments </h3>
      {filteredComments.length === 0 ? (
        <p>No comments available.</p>
      ) : (
        <ul className="list-group">
          {filteredComments.map(comment => (
            <li key={comment.commentid} className="list-group-item">
              <strong>{getUserNameById(comment.userid)}:</strong> {comment.comment}
              <br />
              <small className="text-muted">Posted on {comment.created}</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CommentList;
