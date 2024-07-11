import React, { useContext, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { Card, Row, Col, Form, Button, ListGroup, Breadcrumb, CardFooter, Navbar} from "react-bootstrap";
import CommentList from "../components/CommentList";
import HeaderBar from "../components/HeaderBar";

function SlotDetail() {
    const { id, slotid } = useParams();
    const { slots, users, currentUser, questions, getSubjectNameById } = useContext(UserContext);
    const [expandedSlot, setExpandedSlot] = useState(null);
    const filterSlot = slots.filter((slot) => slot.subjectid === parseInt(id));
    const slotName=`Slot ${slotid}`;
    const filterSlotbyName = filterSlot.filter((slot) => slot.name == slotName);
    const filterQuestion = questions.filter((question) => filterSlot.some(slot => question.slotid === slot.slotid));
    console.log(filterSlot);
    console.log(filterSlotbyName);


    const handleToggle = (slotId) => {
      setExpandedSlot(expandedSlot === slotId ? null : slotId);
    };

  return (
    <div style={{marginTop: '20px'}}>
      <Navbar bg="light" variant="light" className="mb-4 mt-4" >
      <div style={{padding: '0.5rem 1rem', fontSize: '1.25rem'}}>
        <Breadcrumb className="mb-0">
          <Breadcrumb.Item href="/home">Home</Breadcrumb.Item>
          <Breadcrumb.Item href={`/subject/${id}`}> {getSubjectNameById(parseInt(id))}</Breadcrumb.Item>
          <Breadcrumb.Item active>{slotName}</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </Navbar>
      {filterSlotbyName.map((slot, index) => (
            <Card key={index} className="mb-4">
              <Card.Header onClick={() => handleToggle(slot.slotid)} style={{ cursor: 'pointer' }}>
                Slot {index + 1}: {slot.title}
              </Card.Header>
              <Card.Body>
                <Card.Title>{slot.title}</Card.Title>
                {expandedSlot === slot.slotid && (
                  <CardFooter>
                    {filterQuestion.filter(question => question.slotid === slot.slotid).map((question, qIndex) => (
                      <Card.Text key={qIndex}>
                        <Link to={`/subject/${id}/slot/${slot.slotid}/question/${question.questionid}`}>
                          Question {question.orderid}: {question.title}
                        </Link>
                      </Card.Text>
                    ))}
                  </CardFooter>
                )}
              </Card.Body>
            </Card>
          ))}
    </div>
  )
}

export default SlotDetail