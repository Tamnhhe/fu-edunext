import React,{ useContext } from 'react';
import NavBar from '../components/NavBar';
import { UserContext } from '../context/UserContext'; // Import UserContext
import { Navigate } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import SemesterDropdown from '../components/SemesterDropdown';

function Assignment() {

  const { currentUser } = useContext(UserContext); // Access user from UserContext

  if (!currentUser) {
    console.log("Not logged in");
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <Row>
      
      <Col>
        <Row>
          <Col md={12} className='text-center mt-4'><h1>My Assignment</h1>
          
          </Col>
        </Row>
       </Col>
      </Row>
    </div>
  )
}

export default Assignment;