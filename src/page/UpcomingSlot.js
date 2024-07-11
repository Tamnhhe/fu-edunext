import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { Card, Container, Row, Col } from 'react-bootstrap';
function UpcomingSlot() {
  const { slots, getSubjectNameById } = useContext(UserContext);
  const today = new Date();

  const filteredSlots = slots.filter(slot => {
    const slotDate = new Date(slot.startdate);
    return slotDate < today;
  });

  
  console.log(filteredSlots);

  return (
    <Container>
      <h1 className="my-4">Upcoming Slots</h1>
      <Row>
        {filteredSlots.map(slot => (
          <Col key={slot.slotid} md={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{getSubjectNameById(slot.subjectid)}</Card.Title>
                <Card.Title>{slot.title}</Card.Title>
                <Card.Text>Start Date: {new Date(slot.startdate).toLocaleDateString()}</Card.Text>
                <Card.Text>End Date: {new Date(slot.enddate).toLocaleDateString()}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default UpcomingSlot
