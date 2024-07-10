import React, { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { Card, Row, Col, Form, Button, ListGroup, Dropdown, DropdownButton } from "react-bootstrap";
import NavBar from "../components/NavBar";

const QuestionForSlot = () => {
  const { id, slotid, questionid } = useParams();
  const { questions, users } = useContext(UserContext);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const navigate = useNavigate();

  // Find the specific question based on questionid, slotid, and subjectid
  const question = questions.find(
    question => question.slotid === parseInt(slotid) && question.subjectid === parseInt(id) && question.questionid === parseInt(questionid)
  );

  // Filter questions based on slot id and subject id
  const relatedQuestions = questions.filter(
    question => question.slotid === parseInt(slotid) && question.subjectid === parseInt(id)
  );

  // Handle comment submission
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment) {
      setComments([...comments, { text: comment, user: users.find(user => user.id === 1) }]); // Replace 1 with the current user id
      setComment("");
    }
  };

  // Handle group selection
  const handleSelectGroup = (group) => {
    setSelectedGroup(group);
  };

  // Handle question selection from list group
  const handleSelectQuestion = (questionId) => {
    navigate(`/subject/${id}/slot/${slotid}/question/${questionId}`);
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
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit" className="mt-2">
                    Submit
                  </Button>
                </Form>
                <ListGroup className="mt-3">
                  {comments.map((comment, idx) => (
                    <ListGroup.Item key={idx}>
                      <strong>{comment.user.username}:</strong> {comment.text}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>
          )}
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
            {users.map((user, index) => (
              <Dropdown.Item key={index} eventKey={user.username}>
                {user.username}
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
