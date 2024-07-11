import React,{ useContext } from 'react';
import { UserContext } from '../context/UserContext'; // Import UserContext
import { Navigate } from 'react-router-dom';
import { Card, Container, Row, Col } from 'react-bootstrap';

function Assignment() {

  const { currentUser, assignments } = useContext(UserContext); // Access user from UserContext

  console.log(assignments);
  if (!currentUser) {
    console.log("Not logged in");
    return <Navigate to="/login" />;
  }

  return (
    <Container>
      <h1 className="my-4">Assignments</h1>
      <Row>
        {assignments.map(assignment => (
          <Col key={assignment.assignmentid} md={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{assignment.assignmentTitle}</Card.Title>
                <Card.Text>{assignment.assignmentDescription}</Card.Text>
                <Card.Text>Due Date: {new Date(assignment.duedate).toLocaleDateString()}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Assignment;