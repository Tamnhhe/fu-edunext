import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
function SubjectList() {
  const { subjects } = useContext(UserContext);
  // console.log(subjects)

  return (
    <div className="d-flex">
      {subjects.map((subject) => (
        <Card className="custom-card" style={{ width: "100%", height: "300px", margin: "10px" }}>
  <Card.Body className="d-flex flex-column">
    <Card.Title>{subject.subtitle}</Card.Title>
    <Card.Text className="flex-grow-1">
      <Col key={subject.subjectid}>
        <div>{subject.subname}</div>
      </Col>
    </Card.Text>
    <Button
      className="w-100 mt-auto glow-on-hover"
      variant="primary"
      onClick={() => (window.location.href = `/subject/${subject.subjectid}`)}
      
    >
      Go to course
    </Button>
  </Card.Body>
</Card>

      ))}
    </div>
  );
}

export default SubjectList;
