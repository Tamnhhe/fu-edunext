import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function SubjectDetail() {
    const {slots,questions} = useContext(UserContext);
    const { id } = useParams();
    const filterSlot = slots.filter(slot => slot.subjectid == id);
  return (
    <div>
        {filterSlot.map((slot,index) => (
            <Card>
            <Card.Header>Slot {index+1}</Card.Header>
            <Card.Body>
              <Card.Title>{slot.title}</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        ))}
    </div>
  )
}

export default SubjectDetail
