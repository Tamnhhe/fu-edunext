import React, { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { Card, Row, Col, Form, Button, ListGroup, Dropdown, DropdownButton } from "react-bootstrap";
import CommentList from "../components/CommentList";

function SlotDetail() {
    const { id, slotid } = useParams();
    const { slots, users, currentUser,  getUserNameById } = useContext(UserContext);
    const filterSlot = slots.filter((slot) => slot.subjectid === parseInt(id));
    
  return (
    <div>SlotDetail</div>
  )
}

export default SlotDetail