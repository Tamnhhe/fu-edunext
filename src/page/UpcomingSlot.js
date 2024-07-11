import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';
import { Card, Container, Row, Col, ButtonGroup, Button } from 'react-bootstrap';
function UpcomingSlot() {
  const { slots, getSubjectNameById } = useContext(UserContext);
  const today = new Date();
  const [filterType, setFilterType] = useState('all');


  const filterSlots = (type) => {
    switch (type) {
      case 'upcoming':
        return slots.filter(slot => new Date(slot.startdate) > today);
      case 'on-going':
        return slots.filter(slot => new Date(slot.startdate) <= today && new Date(slot.enddate) >= today);
      case 'completed':
        return slots.filter(slot => new Date(slot.enddate) < today);
      case 'all':
      default:
        return slots;
    }
  };

  const filteredSlots = filterSlots(filterType);
  console.log(slots);
  // const filteredSlots = slots.filter(slot => {
  //   const slotDate = new Date(slot.enddate);
  //   console.log(slotDate, " ", slotDate > today);
  //   return slotDate > today;
  // });

  
  console.log(filteredSlots);

  return (
    <Container>
      <h1 className="my-4">Upcoming Slots</h1>
      <ButtonGroup className="mb-4">
        <Button
          variant={filterType === 'all' ? 'primary' : 'outline-primary'}
          onClick={() => setFilterType('all')}
        >
          All
        </Button>
        <Button
          variant={filterType === 'upcoming' ? 'secondary' : 'outline-secondary'}
          onClick={() => setFilterType('upcoming')}
        >
          Upcoming
        </Button>
        <Button
          variant={filterType === 'on-going' ? 'warning' : 'outline-warning'}
          onClick={() => setFilterType('on-going')}
        >
          On-Going
        </Button>
        <Button
          variant={filterType === 'completed' ? 'success' : 'outline-success'}
          onClick={() => setFilterType('completed')}
        >
          Completed
        </Button>
      </ButtonGroup>
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
