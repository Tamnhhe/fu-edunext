// // src/context/UserContext.js
// import React, { createContext, useState, useEffect } from 'react';
// import axios from 'axios';

// export const UserContext = createContext();

// const UserProvider = ({ children }) => {
//   const [users, setUsers] = useState([]);
//   const [currentUser, setCurrentUser] = useState(() => {
//     const savedUser = localStorage.getItem('currentUser');
//     return savedUser ? JSON.parse(savedUser) : null;
//   });
//   const [semesters, setSemesters] = useState([]);
//   const [subjects, setSubjects] = useState([]);
//   const [slots, setSlots] = useState([]);
//   const [questions, setQuestions] = useState([]);
//   // Mock API endpoint for users
//   const API_URL = 'http://localhost:9999/users'; // Adjust as per your API configuration
//   const SEMESTER_URL = 'http://localhost:9999/semesters';
//   const SUBJECT_URL = 'http://localhost:9999/subjects';
//   const SLOT_URL = 'http://localhost:9999/slots';
//   const QUESTION_URL = 'http://localhost:9999/questions';
//   // Fetch users data on component mount
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(API_URL);
//         setUsers(response.data);
//       } catch (error) {
//         console.error('Error fetching users:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   console.log(users);

//   // Fetch semesters data on component mount
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(SEMESTER_URL);
//         setSemesters(response.data);
//       } catch (error) {
//         console.error('Error fetching semesters:', error);
//       }
//     };

//     fetchData();
//   }, []);

//    // Fetch subject data on component mount
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(SUBJECT_URL);
//         setSubjects(response.data);
//       } catch (error) {
//         console.error('Error fetching subjects:', error);
//       }
//     };

//     fetchData();
//   }, []);
// // Fetch slot data on component mount
// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const response = await axios.get(SLOT_URL);
//       setSlots(response.data);
//     } catch (error) {
//       console.error('Error fetching slot:', error);
//     }
//   };

//   fetchData();
// }, []);
// // Fetch slot data on component mount
// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const response = await axios.get(QUESTION_URL);
//       setQuestions(response.data);
//     } catch (error) {
//       console.error('Error fetching questions:', error);
//     }
//   };

//   // Function to find a user by username
//   const findUserByUsername = (username) => {
//     return users.find(user => user.username === username);
//   };

//   const checkLogin = (username, password) => {
//     return users.some(user => user.username === username && user.password === password);
//   };

//    // Function to add a new user
//    const addUser = async (newUser) => {
//     try {

//       // Assuming newUser is an object with username and password
//       const response = await axios.post(API_URL, {
//         id: users.length + 1,
//         ...newUser
//         });
//       alert('User added successfully');
//       setUsers([...users, response.data]); // Update local state
//       console.log('User added successfully:', response.data);
//       console.log('User List', users);
//     } catch (error) {
//       console.error('Error adding user:', error);
//     }
//   };

//   // Context value object
//   const contextValue = {
//     users,
//     findUserByUsername,
//     addUser,
//     currentUser,
//     setCurrentUser,
//     checkLogin,
//     semesters,
//     subjects,
//     slots,
//     questions
//     // Add other state and functions as needed
//   };

//   return (
//     <UserContext.Provider value={contextValue}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// };
// export default UserProvider;

// src/context/UserContext.js
import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(() => {
    const savedUser = localStorage.getItem("currentUser");
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [semesters, setSemesters] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [slots, setSlots] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [comments, setComments] = useState([]);
  const [groups, setGroups] = useState([]);
  const [assignments, setAssignments] = useState([]);
  const [selectedSemester, setSelectedSemester] = useState(1);


  const API_URL = "http://localhost:9999/users"; // Adjust as per your API configuration
  const SEMESTER_URL = "http://localhost:9999/semesters";
  const SUBJECT_URL = "http://localhost:9999/subjects";
  const SLOT_URL = "http://localhost:9999/slots";
  const QUESTION_URL = "http://localhost:9999/questions";
  const COMMENT_URL = "http://localhost:9999/comments";
  const GROUP_URL = "http://localhost:9999/groups";
  const ASSIGNMENT_URL = "http://localhost:9999/assignments";
  // Fetch users data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL);
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchData();
  }, []);

  // Fetch semesters data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(SEMESTER_URL);
        setSemesters(response.data);
      } catch (error) {
        console.error("Error fetching semesters:", error);
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
        console.error("Error fetching subjects:", error);
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
        console.error("Error fetching slots:", error);
      }
    };

    fetchData();
  }, []);

  // Fetch question data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(QUESTION_URL);
        setQuestions(response.data);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchData();
  }, []);

  // Fetch comment data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(COMMENT_URL);
        setComments(response.data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchData();
  }, []);
  // Fetch group data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(GROUP_URL);
        setGroups(response.data);
      } catch (error) {
        console.error("Error fetching groups:", error);
      }
    };

    fetchData();
  }, []);

  // Fetch assignment data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(ASSIGNMENT_URL);
        setAssignments(response.data);
      } catch (error) {
        console.error("Error fetching assignments:", error);
      }
    };

    fetchData();
  }, []);

  //Function to get username by id
  const getUserNameById = (id) => {
    const user = users.find((user) => user.id === id);
    return user ? user.username : "";
  };

  // Function to find a user by username
  const findUserByUsername = (username) => {
    return users.find((user) => user.username === username);
  };

  // Function to checking login
  const checkLogin = (username, password) => {
    return users.some(
      (user) => user.username === username && user.password === password
    );
  };

  // Function get subjectname by id
  const getSubjectNameById = (id) => {
    const subject = subjects.find((subject) => subject.subjectid  ===  id);
    return subject ? subject.subname : "";
  };

  // Function get semesterid by subjectid
  const getSemesterIdBySubjectId = (id) => {
    const subject = subjects.find((subject) => subject.subjectid  ===  id);
    return subject ? subject.semesterid : "";
  } 

  // Function to add a new user
  const addUser = async (newUser) => {
    try {
      // Assuming newUser is an object with username and password
      const response = await axios.post(API_URL, {
        id: users.length + 1,
        ...newUser,
      });
      alert("User added successfully");
      setUsers([...users, response.data]); // Update local state
      console.log("User added successfully:", response.data);
      console.log("User List", users);
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  //Function to add comment
  const addComment = async (newComment) => {
    try {
      const response = await axios.post(COMMENT_URL, {
        id: comments.length + 1,
        ...newComment,
      });
      alert("Comment added successfully");
      setComments([...comments, response.data]); // Update local state
      console.log("Comment added successfully:", response.data);
      console.log("Comment List", comments);
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  useEffect(() => {
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
  }, [currentUser]);

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
    groups,
    questions,
    comments,
    setComments,
    getUserNameById,
    addComment,
    assignments,
    getSubjectNameById,
    getSemesterIdBySubjectId,
    selectedSemester,
    setSelectedSemester
    // Add other state and functions as needed
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
