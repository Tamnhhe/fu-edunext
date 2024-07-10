// src/context/UserContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  // Mock API endpoint for users
  const API_URL = 'http://localhost:9999/users'; // Adjust as per your API configuration

  // Fetch users data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL);
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchData();
  }, []);

  // Function to find a user by username
  const findUserByUsername = (username) => {
    return users.find(user => user.username === username);
  };

  // Context value object
  const contextValue = {
    users,
    findUserByUsername
    // Add other state and functions as needed
  };

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
