// src/context/CourseContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const CourseContext = createContext();

const CourseProvider = ({ children }) => {
  const [subjects, setSubjects] = useState([]);
  const [slots, setSlots] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [assignments, setAssignments] = useState([]);

  // Mock API endpoints for courses (subjects, slots, questions, assignments)
  const API_URL = 'http://localhost:9999'; // Adjust as per your API configuration

  // Fetch courses data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}/courses`);
        setSubjects(response.data.subjects);
        setSlots(response.data.slots);
        setQuestions(response.data.questions);
        setAssignments(response.data.assignments);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchData();
  }, []);

  // Function to find a subject by ID
  const findSubjectById = (subjectId) => {
    return subjects.find(subject => subject.subjectid === subjectId);
  };

  // Function to find assignments by subject ID
  const findAssignmentsBySubjectId = (subjectId) => {
    return assignments.filter(assignment => assignment.subjectid === subjectId);
  };

  // Context value object
  const contextValue = {
    subjects,
    slots,
    questions,
    assignments,
    findSubjectById,
    findAssignmentsBySubjectId
    // Add other state and functions as needed
  };

  return (
    <CourseContext.Provider value={contextValue}>
      {children}
    </CourseContext.Provider>
  );
};

export default CourseProvider;
