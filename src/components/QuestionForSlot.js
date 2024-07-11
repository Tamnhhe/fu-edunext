import React, { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { Card, Row, Col, Form, Button, ListGroup, Dropdown, DropdownButton } from "react-bootstrap";
import CommentList from "../components/CommentList";

const QuestionForSlot = () => {
  const { id, slotid, questionid } = useParams();
  const { questions, users, currentUser, comments, setComments, getUserNameById,groups, addComment } = useContext(UserContext);
  const [answer, setAnswer] = useState("");
  const [comment, setComment] = useState("");
  // const [comments, setComments] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const navigate = useNavigate();
  const filterComment = comments.filter(comment => comment.questionid === parseInt(questionid));

  // Find the specific question based on questionid, slotid, and subjectid
  const question = questions.find(
    question => question.slotid === parseInt(slotid) && question.subjectid === parseInt(id) && question.questionid === parseInt(questionid)
  );

  // Filter questions based on slot id and subject id
  const relatedQuestions = questions.filter(
    question => question.slotid === parseInt(slotid) && question.subjectid === parseInt(id)
  );

  // Handle group selection
  const handleSelectGroup = (group) => {
    setSelectedGroup(group);
  };

  // Handle question selection from list group
  const handleSelectQuestion = (questionId) => {
    navigate(`/subject/${id}/slot/${slotid}/question/${questionId}`);
  };


  // Handle comment submission
  const handleCommentSubmit = (e) => {
    console.log("Answer:", answer);
    e.preventDefault();
    if (answer) {
      const newComment = {
        questionid: parseInt(questionid),
        userid: currentUser.id,
        comment: answer,
        created: new Date().toISOString().slice(0, 10),
      };
      console.log(newComment);
      addComment(newComment);
    }
  };

  return (
    <div>
      {/* <NavBar /> */}
      <Row>
        <Col md={9}>
          <h3>Question Details</h3>
          {question && (
            <Card className="mb-4">
              <Card.Header>
                {question.orderid}. {question.title}
              </Card.Header>
              <Card.Body>
                <Card.Text><strong>Description:</strong> {question.description}</Card.Text>
                <Form onSubmit={handleCommentSubmit} className="mt-3">
                  <Form.Group controlId={`comment-${question.questionid}`}>
                    <Form.Label>Comment</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your answer"
                      value={answer}
                      onChange={(e) => setAnswer(e.target.value)}
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit" className="mt-2">
                    Submit
                  </Button>
                </Form>
                {/* <ListGroup className="mt-3">
                  {filterComment.map((comment, idx) => (
                    <ListGroup.Item key={idx}>
                      <strong> {getUserNameById(comment.userid)}</strong> {comment.comment}
                    </ListGroup.Item>
                  ))}
                </ListGroup> */}
              </Card.Body>
            </Card>
          )}

          <CommentList questionId={parseInt(questionid)} />
        </Col>
        <Col md={3}>
          <h5>Related Questions</h5>
          <ListGroup>
            {relatedQuestions.map((question, index) => (
              <ListGroup.Item 
                key={index} 
                action 
                onClick={() => handleSelectQuestion(question.questionid)}
                active={question.questionid === parseInt(questionid)}
              >
                {question.orderid}. {question.title}
              </ListGroup.Item>
            ))}
          </ListGroup>
          <DropdownButton id="dropdown-basic-button" title="Select Group" onSelect={handleSelectGroup} className="mt-3">
            {groups.map((group, index) => (
              <Dropdown.Item key={index} eventKey={group.name}>
              {group. name}
            </Dropdown.Item>
            ))}
          </DropdownButton>
          {selectedGroup && <h4 className="mt-3">Group: {selectedGroup}</h4>}
        </Col>
      </Row>
    </div>
  );
};

export default QuestionForSlot;
