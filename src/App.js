// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import NavBar from './components/NavBar'; // Adjust the import path as necessary
// import LoginPage from './page/Login';
// import RegisterForm from './components/RegisterForm';
// import Home from './page/Home';
// import { Container } from 'react-bootstrap';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import Assignment from './page/Assignment';
// import './App.css';
// import SubjectDetail from './components/SubjectDetail';
// import QuestionForSlot from './components/QuestionForSlot'; // Import QuestionForSlot
// import UserProvider from './context/UserContext'; // Import UserProvider
// const App = () => {
//   return (
    
//     <UserProvider>
//     <Router>
   
        
//           <Routes>
//             <Route path="/" element=
//               {
//                 <LoginPage/>
//               }
//             />
       
//           <Route path="/home" element={<Home />} />
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/register" element={<RegisterForm />} />
//           <Route path="/assignment" element={<Assignment />} />
//           <Route path="/subject/:id" element={<SubjectDetail />} />
//           <Route path="/subject/:id/slot/:slotid/question/:questionid" element={<QuestionForSlot />} /> {/* Add new route */}
//           </Routes>
        

        
//       </Router>

//       </UserProvider>

//   );
// };

// export default App;


// src/App.js
// src/App.js
// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import NavBar from './components/NavBar'; // Adjust the import path as necessary
import LoginPage from './page/Login';
import RegisterForm from './components/RegisterForm';
import Home from './page/Home';
import Assignment from './page/Assignment';
import SubjectDetail from './components/SubjectDetail';
import QuestionForSlot from './components/QuestionForSlot'; // Import QuestionForSlot
import SlotDetail from './page/SlotDetail';
import AssignmentDetail from './components/AssignmentDetail';
import UserProvider from './context/UserContext'; // Import UserProvider
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import UpcomingSlot from './page/UpcomingSlot';
const App = () => {
  return (
    <UserProvider>
      <Router>
        <Main />
      </Router>
    </UserProvider>
  );
};

const Main = () => {
  const location = useLocation();

  const hideNavBarRoutes = ['/login',"/", '/register']; // Add paths where NavBar should be hidden
  const shouldHideNavBar = hideNavBarRoutes.includes(location.pathname);
  
  return (
    <Container fluid>
      <Row>
        {!shouldHideNavBar && (
          <Col md={2}>
            <NavBar />
          </Col>
        )}
        <Col md={!shouldHideNavBar ? 10 : 12}>
          <Routes>
            <Route path="/"   element={<LoginPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/upcoming-slot" element={<UpcomingSlot/>} />
            <Route path="/assignment" element={<Assignment />} />
            <Route path="/subject/:id" element={<SubjectDetail />} />
            <Route path="/subject/:id/slot/:slotid" element={<SlotDetail />} />
            <Route path="/subject/:id/slot/:slotid/question/:questionid" element={<QuestionForSlot />} />
            <Route path="/subject/:id/slot/:slotid/assignment/:assignmentid" element={<AssignmentDetail />} />
          </Routes>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
