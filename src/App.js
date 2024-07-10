import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar'; // Adjust the import path as necessary
import LoginPage from './page/Login';
import RegisterForm from './components/RegisterForm';
import Home from './page/Home';
import { Container } from 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
const App = () => {
  return (
    <Router>
        {/* <NavBar /> */}
        <Container className="mt-4">
          <Routes>
            <Route path="/" element=
              {
                <LoginPage/>
              }
            />
            <Route path="/home" element={<Home/>} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/register" element={<RegisterForm />} />
          </Routes>
        </Container>
      </Router>
  );
};

export default App;
