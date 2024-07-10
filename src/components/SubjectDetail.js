import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { CardFooter } from "react-bootstrap";
function SubjectDetail() {
  const { slots, questions } = useContext(UserContext);
  const { id } = useParams();
  const filterSlot = slots.filter((slot) => slot.subjectid == id);
  const filterQuestion = questions.filter((question) => question.slotid == id);
  return (
    <div>
      {filterSlot.map((slot, index) => (
        <Card>
          <Card.Header>Slot {index + 1}</Card.Header>
          <Card.Body>
            <Card.Title>{slot.title}</Card.Title>
          </Card.Body>
          <CardFooter>
            {filterQuestion.map((question, index) => (
              <Card.Text>{question.title}</Card.Text>
            ))}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export default SubjectDetail;
