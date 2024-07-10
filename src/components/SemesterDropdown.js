// components/SemesterDropdown.js
import React, { useContext } from 'react';
import { Form } from 'react-bootstrap';
import { UserContext } from '../context/UserContext';

const SemesterDropdown = ({ onSelectSemester }) => {
  const { semesters } = useContext(UserContext);

  return (
    <Form.Select onChange={(e) => onSelectSemester(e.target.value)}>
      <option>Select Semester</option>
      {semesters.map(semester => (
        <option key={semester.semesterid} value={semester.semesterid}>
          {semester.semestername}
        </option>
      ))}
    </Form.Select>
  );
};

export default SemesterDropdown;
