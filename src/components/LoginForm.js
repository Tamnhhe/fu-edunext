// LoginForm.js
import React, { useState, useContext } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { UserContext } from '../context/UserContext'; // Import UserContext
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../css/LoginForm.css'; // Import custom CSS for styling

const LoginForm = () => {
    const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { findUserByUsername, checkLogin, setCurrentUser } = useContext(UserContext); // Access findUserByUsername from UserContext

//   const history = browserHistory;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!username || !password) {
      alert('Please enter both username and password.');
      return;
    }

    // Check if the user exists
    const user = findUserByUsername(username);
    if (!user) {
      alert('User not found. Please check your credentials.');
      return;
    }

    // Validate password
    if (user.password !== password) {
      alert('Invalid password. Please try again.');
      return;
    } 

    // Check if the user is logged in
    if (checkLogin(username, password)) {
      alert('Login successful!');
      setCurrentUser(user);  
      navigate("/home");
    }
    

    // Call the onSubmit prop with the entered credentials
    // onSubmit({ username, password });

  };

  return (
    <Container>
    <Row className="justify-content-md-center mt-5">
      <Col md={6}>
        <Form onSubmit={handleSubmit}>
          <h3 className="text-center mb-4">Login</h3>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100">
            Submit
          </Button>

          <p className="forgot-password text-right mt-3">
            Don't have an account? <a href="/register">Sign Up</a>
          </p>
        </Form>
      </Col>
    </Row>
  </Container>
);
};

export default LoginForm;
