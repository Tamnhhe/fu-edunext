import React,{ useContext } from 'react';
import NavBar from '../components/NavBar';
import { UserContext } from '../context/UserContext'; // Import UserContext
import { Navigate } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import SemesterDropdown from '../components/SemesterDropdown';

function Home() {

  const { currentUser } = useContext(UserContext); // Access user from UserContext

  if (!currentUser) {
    console.log("Not logged in");
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <Row>
      <Col md={2}><NavBar /> </Col>
      <Col md={10}>
        <Row>
          <Col md={12}><h1>Welcome to the Edunext Platform</h1>
          <SemesterDropdown />
          </Col>
        </Row>
       </Col>
      </Row>
    </div>
  )
}

export default Home;