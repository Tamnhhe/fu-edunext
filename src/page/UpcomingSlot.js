import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';
import { Card, Container, Row, Col, ButtonGroup, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../css/UpcomingSlot.css';
function UpcomingSlot() {
  const { slots, getSubjectNameById} = useContext(UserContext);
  const today = new Date();
  const [filterType, setFilterType] = useState('all');

  const navigate = useNavigate();

  const getStatus = (slot) => {
    const startDate = new Date(slot.startdate);
    const endDate = new Date(slot.enddate);

    if (startDate > today) {
      return 'Upcoming';
    } else if (startDate <= today && endDate >= today) {
      return 'On-going';
    } else {
      return 'Completed';
    }
  };

  const getVariant = (slot) => {
    const startDate = new Date(slot.startdate);
    const endDate = new Date(slot.enddate);

    if (startDate > today) {
      return 'primary';
    } else if (startDate <= today && endDate >= today) {
      return 'warning';
    } else {
      return 'success';
    }
  };

  const handleCardClick = (subjectid, slotid) => {
    const path = `subject/${subjectid}/slot/${slotid}`;
    navigate(`/${path}`);
  };

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
            <Card className="card-hover" onClick={() => handleCardClick(slot.subjectid, slot.slotid)}>
              <Card.Body>
                <Card.Title>{getSubjectNameById(slot.subjectid)}</Card.Title>
                <Card.Text>{slot.name}</Card.Text>
                <Card.Title>{slot.title}</Card.Title>
                <Card.Text>Start Date: {new Date(slot.startdate).toLocaleDateString()}</Card.Text>
                <Card.Text>End Date: {new Date(slot.enddate).toLocaleDateString()}</Card.Text>
                <Card.Text className={`status ${getStatus(slot).toLowerCase()}`}>
                  Status: <Button variant={getVariant(slot)} disabled>{getStatus(slot)}</Button></Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default UpcomingSlot
