import React,{ useContext } from 'react';
import NavBar from '../components/NavBar';
import { UserContext } from '../context/UserContext'; // Import UserContext
import { Navigate } from 'react-router-dom';

function Home() {

  const { currentUser } = useContext(UserContext); // Access user from UserContext

  if (!currentUser) {
    console.log("Not logged in");
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <NavBar />
      <h1>Home</h1>
    </div>
  )
}

export default Home;