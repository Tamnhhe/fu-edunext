import React,{ useContext } from 'react';
import { UserContext } from '../context/UserContext'; // Import UserContext
import { Navigate, Link, useParams } from 'react-router-dom';
import { Card, Container, Row, Col } from 'react-bootstrap';
import ClassIcon from "@mui/icons-material/Class";
import SubjectIcon from "@mui/icons-material/Subject";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
function Assignment() {

  const { currentUser, assignments, getSubjectNameById, submissions } = useContext(UserContext); // Access user from UserContext

  console.log(assignments);
  if (!currentUser) {
    console.log("Not logged in");
    return <Navigate to="/login" />;
  }

  // const {} = useParams();
  // console.log(assignmentid);
  // const findSubmission = () =>{
  //   return submissions.filter((submission) => {
  //     const isassignment = submission.assignmentid === parseInt(assignmentid);

  //     return submission.assignmentid === parseInt(assignmentid);
  //   })
  // }

  return (
    // <Container>
    //   <h1 className="my-4">Assignments</h1>
    //   <Row>
    //     {assignments.map(assignment => (
    //       <Col key={assignment.assignmentid} md={4} className="mb-4">
    //         <Card>
    //           <Card.Body>
    //             <Card.Title>{assignment.assignmentTitle}</Card.Title>
    //             <Card.Text>{assignment.assignmentDescription}</Card.Text>
    //             <Card.Text>Due Date: {new Date(assignment.duedate).toLocaleDateString()}</Card.Text>
    //           </Card.Body>
    //         </Card>
    //       </Col>
    //     ))}
    //   </Row>
    // </Container>


  
    <Container>
      <h1 className="my-3">Assignments</h1>

      <Row>
        {assignments && (
        assignments.map(assignment => (
          <Col key={assignment.assignmentid} md={3} className="mb-3 card-hover ">
            <Card>
              <Card.Body>
                <Card.Title>{assignment.assignmentTitle}</Card.Title>

                <Card.Text>Slot {assignment.slotid}</Card.Text>

                <Card.Title>   <SubjectIcon style={{ marginRight: "8px" }} /> 
                
                <span style={{ color: "green" }}>
                {getSubjectNameById(assignment.subjectid)}
              </span>
                
                </Card.Title>
                
             

                <Card.Text className="d-flex align-items-center">
                  <ClassIcon style={{ marginRight: "8px" }} />
                  <div className="">SE1829-NJ</div>
                </Card.Text>
               
                <Card.Text> <AccessTimeIcon style={{ marginRight: "8px" }} />  Due Date: {new Date(assignment.duedate).toLocaleDateString()}</Card.Text>
            
                <Link to={`/subject/${assignment.subjectid}/slot/${assignment.slotid-5*(assignment.subjectid-1)}/assignment/${assignment.assignmentid}`} className=" btn btn-primary">
                  View assignment
                </Link>

              </Card.Body>
            </Card>
          </Col>
        )))}
      </Row>
    </Container>
  );

  
}

export default Assignment;