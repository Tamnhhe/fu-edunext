import React, { useContext } from "react";
import { UserContext } from "../context/UserContext"; // Import UserContext
import { Navigate } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import SemesterDropdown from "../components/SemesterDropdown";
import SubjectList from "../components/SubjectList";

function Home() {
  const { currentUser } = useContext(UserContext); // Access user from UserContext

  if (!currentUser) {
    console.log("Not logged in");
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <Row>
        <Container>
          <Col>
            <Row>
              <Col className="mt-4">
                <h1>Welcome to the Edunext Platform</h1>
                <SemesterDropdown />
                <SubjectList />
              </Col>
            </Row>
          </Col>
        </Container>
      </Row>
    </div>
  );
}

export default Home;
