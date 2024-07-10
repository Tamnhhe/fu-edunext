import React, { useState, useContext } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { UserContext } from '../context/UserContext'; // Import UserContext
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../css/RegisterForm.css'; // Import custom CSS for styling

const RegisterForm = ({ onSubmit }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  // const [fullname, setFullname] = useState('');
  const { addUser } = useContext(UserContext); // Access addUser from UserContext
  const role = "student";
  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    // || !fullname          , fullname 
    if (!username || !password || !password2   ) {
      alert('Please enter all fields.');
      return;
    } else{
        console.log("Register Successful");
        addUser({ username, password, role});
        navigate("/login");
    }
    // Call the onSubmit prop with the entered credentials
    // onSubmit({ username, password, password2});
  };

  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col md={6}>
          <Form onSubmit={handleSubmit}>
            <h3 className="text-center mb-4">Register</h3>

            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>

            {/* <Form.Group className="mb-3" controlId="formBasicFullname">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter full name"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
              />
            </Form.Group> */}

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formConfirmBasicPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter confirm password"
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Register
            </Button>

            <p className="text-center mt-3">
              Already have an account? <a href="/login">Login here</a>
            </p>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterForm;
