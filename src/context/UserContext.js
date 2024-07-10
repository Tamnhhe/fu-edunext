// src/context/UserContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [semesters, setSemesters] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [slots, setSlots] = useState([]);
  const [questions, setQuestions] = useState([]);
  // Mock API endpoint for users
  const API_URL = 'http://localhost:9999/users'; // Adjust as per your API configuration
  const SEMESTER_URL = 'http://localhost:9999/semesters';
  const SUBJECT_URL = 'http://localhost:9999/subjects';
  const SLOT_URL = 'http://localhost:9999/slots';
  const QUESTION_URL = 'http://localhost:9999/questions';
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

  console.log(users);

  // Fetch semesters data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(SEMESTER_URL);
        setSemesters(response.data);
      } catch (error) {
        console.error('Error fetching semesters:', error);
      }
    };

    fetchData();
  }, []);
   // Fetch subject data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(SUBJECT_URL);
        setSubjects(response.data);
      } catch (error) {
        console.error('Error fetching subjects:', error);
      }
    };

    fetchData();
  }, []);
// Fetch slot data on component mount
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get(SLOT_URL);
      setSlots(response.data);
    } catch (error) {
      console.error('Error fetching slot:', error);
    }
  };

  fetchData();
}, []);
// Fetch slot data on component mount
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get(QUESTION_URL);
      setQuestions(response.data);
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  fetchData();
}, []);
  // Function to find a user by username
  const findUserByUsername = (username) => {
    return users.find(user => user.username === username);
  };

  const checkLogin = (username, password) => {
    return users.some(user => user.username === username && user.password === password);
  };

   // Function to add a new user
   const addUser = async (newUser) => {
    try {

      // Assuming newUser is an object with username and password
      const response = await axios.post(API_URL, {
        id: users.length + 1,
        ...newUser
        });
      alert('User added successfully');
      setUsers([...users, response.data]); // Update local state
      console.log('User added successfully:', response.data);
      console.log('User List', users);
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  // Context value object
  const contextValue = {
    users,
    findUserByUsername,
    addUser,
    currentUser,
    setCurrentUser,
    checkLogin,
    semesters,
    subjects,
    slots,
    questions
    // Add other state and functions as needed
  };

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
