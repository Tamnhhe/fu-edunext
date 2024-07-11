import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';
import { Button, ButtonGroup, Card, Container, Row, Col } from 'react-bootstrap';

const TypeSlots = () => {
  const { slots } = useContext(UserContext);
  const [filterType, setFilterType] = useState('all');

  const today = new Date();

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

  return (
    <Container>
      <h1 className="my-4">Slots</h1>
      <ButtonGroup className="mb-4">
        <Button variant="primary" onClick={() => setFilterType('all')}>All</Button>
        <Button variant="secondary" onClick={() => setFilterType('upcoming')}>Upcoming</Button>
        <Button variant="warning" onClick={() => setFilterType('on-going')}>On-Going</Button>
        <Button variant="success" onClick={() => setFilterType('completed')}>Completed</Button>
      </ButtonGroup>
      <Row>
        {filteredSlots.map(slot => (
          <Col key={slot.slotid} md={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{slot.title}</Card.Title>
                <Card.Text>Start Date: {new Date(slot.startdate).toLocaleDateString()}</Card.Text>
                <Card.Text>End Date: {new Date(slot.enddate).toLocaleDateString()}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TypeSlots;
