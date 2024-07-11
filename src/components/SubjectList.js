import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
function SubjectList() {
  const { subjects, semesters } = useContext(UserContext);
  // console.log(subjects)
  const filterSemeter = semesters.filter((item) => item.semesterid == 2);

  console.log(filterSemeter);
  return (
    <div className="d-flex">
      {subjects.map((subject) => (
        <Card
          className="custom-card"
          style={{ width: "100%", height: "300px", margin: "10px" }}
        >
          <Card.Body className="d-flex flex-column">
            <Card.Title>{subject.subtitle}</Card.Title>
            <Card.Text className="flex-grow-1">
              <Col key={subject.subjectid}>
                <div>{subject.subname}</div>
              </Col>
            </Card.Text>
            <Card.Text className="flex-grow-1">
              <Col >
                {/* Ensure there is at least one item in filterSemeter */}
                {filterSemeter.length > 0 ? (
                  <div> Start Date: {filterSemeter[0].startdate}</div>
                ) : (
                  <div>No start date available</div>
                )}
                {/* Ensure there is at least one item in filterSemeter */}
                {filterSemeter.length > 0 ? (
                  <div> End Date: {filterSemeter[0].enddate}</div>
                ) : (
                  <div>No start date available</div>
                )}
              </Col>
            </Card.Text>

            <Button
              className="w-100 mt-auto glow-on-hover"
              variant="primary"
              onClick={() =>
                (window.location.href = `/subject/${subject.subjectid}`)
              }
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
