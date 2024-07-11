import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ClassIcon from "@mui/icons-material/Class";
import SubjectIcon from "@mui/icons-material/Subject";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";

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
                <div>
                  <SubjectIcon style={{ marginRight: "8px" }} />
                  {subject.subname}
                </div>
              </Col>
              <Card.Text className="d-flex align-items-center">
                <ClassIcon style={{ marginRight: "8px" }} />
                <div className="">SE1829-NJ</div>
              </Card.Text>
            </Card.Text>
            <Card.Text className="flex-grow-1">
              <Col>
                {/* Ensure there is at least one item in filterSemeter */}
                {filterSemeter.length > 0 ? (
                  <div>
                    <AccessTimeIcon style={{ marginRight: "8px" }} />
                    Start Date: {filterSemeter[0].startdate}
                  </div>
                ) : (
                  <div>No start date available</div>
                )}
                {/* Ensure there is at least one item in filterSemeter */}
                {filterSemeter.length > 0 ? (
                  <div>
                    <AccessTimeFilledIcon style={{ marginRight: "8px" }} /> End Date:{" "}
                    {filterSemeter[0].enddate}
                  </div>
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
