import React, { useContext, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { Card, CardFooter, Row, Col } from "react-bootstrap";
import HeaderBar from "../components/HeaderBar";

const SubjectDetail = () => {
  const { slots, questions, subjects } = useContext(UserContext);
  const { id } = useParams();
  const [expandedSlot, setExpandedSlot] = useState(null);

  // Find the subject based on the id from the URL parameters
  const subject = subjects.find(subject => subject.subjectid === parseInt(id));

  const filterSlot = slots.filter((slot) => slot.subjectid === parseInt(id));
  const filterQuestion = questions.filter((question) => filterSlot.some(slot => question.slotid === slot.slotid));

  const handleToggle = (slotId) => {
    setExpandedSlot(expandedSlot === slotId ? null : slotId);
  };

  return (
    <div>
   
      {subject && <HeaderBar subject={subject} />}
      <Row>
       
        <Col md={10}>
          {filterSlot.map((slot, index) => (
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
        </Col>
      </Row>
    </div>
  );
};

export default SubjectDetail;
