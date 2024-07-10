import React, {useContext} from 'react'
import { UserContext } from '../context/UserContext'
import { Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function SubjectList() {
    const {subjects} = useContext(UserContext);
    // console.log(subjects)

  return (
    <div className='d-flex'>
     
                
            
            {subjects.map(subject => (
    <Card style={{ width: '100%',margin:"10px" }}>
    <Card.Body>
      <Card.Title>{subject.subtitle}</Card.Title>
      <Card.Text>
      <Col  key={subject.subjectid} md={3}>
                    <div>{subject.subname}</div>
                </Col>
      </Card.Text>
      <Button variant="primary" onClick={() => window.location.href = `/subject/${subject.subjectid}`}>Go to course </Button>
    </Card.Body>
  </Card>
  ))}
  </div>
  )
}

export default SubjectList
