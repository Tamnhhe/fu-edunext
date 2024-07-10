// LoginForm.js
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../css/LoginForm.css'; // Import custom CSS for styling

const LoginForm = ({ onSubmit }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!username || !password) {
      alert('Please enter both username and password.');
      return;
    }
    // Call the onSubmit prop with the entered credentials
    onSubmit({ username, password });
  };

  return (
    <Container>
    <Row className="justify-content-md-center mt-5">
      <Col md={6}>
        <Form onSubmit={handleSubmit}>
          <h3 className="text-center mb-4">Login</h3>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
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
