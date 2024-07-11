import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import AssignmentIcon from "@mui/icons-material/Assignment";
import EventIcon from "@mui/icons-material/Event";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { UserContext } from "../context/UserContext";
import { Navigate } from "react-router-dom";
import { ListGroup } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const MyVerticallyCenteredModal = (props) => {
  const handleClick = () => {
    window.open('https://www.facebook.com/Tamnhhe', '_blank');
};
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Contact Support
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Support Information</h4>
        <p>
          If you have any issues or questions, please reach out to our support team.
          You can contact us via email at Tamnhhe@gmail.com or call us at 0369994876.
        </p>
      </Modal.Body>
      <Modal.Footer>
      <Button  onClick={handleClick}>Contact</Button>
        <Button  variant="secondary" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

const NavBar = () => {
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [modalShow, setModalShow] = useState(false);

  const handleNavigation = (path, external) => {
    if (external) {
      window.open(path, "_blank");
    } else {
      navigate(path);
    }
  };
  
  return (
    <ListGroup>
      <List>
        <div className="navbar">
          <img className="logo-home" src="/assets/logo-home.png" alt="logo" />
        </div>
        {currentUser ? (
          <div className="welcome">
            <span>Welcome, {currentUser.username} </span>
            <a href="/login">Logout</a>
          </div>
        ) : (
          <Navigate to="/login" />
        )}
        {[
          { text: "Home", icon: <HomeIcon />, path: "/home" },
          { text: "Assignments", icon: <AssignmentIcon />, path: "/assignment" },
          { text: "Upcoming slots", icon: <EventIcon />, path: "/upcoming-slot" },
          {
            text: "Read user guide",
            icon: <PictureAsPdfIcon />,
            path: "https://drive.google.com/uc?export=view&id=1Z2AL5snwR--kUPE6YFddw9pv9UxZ93K2",
            external: true,
          },
          { text: "Frequently Asked Questions", icon: <HelpOutlineIcon />, path: "/faq" },
        ].map((item) => (
          <ListItem
            button
            key={item.text}
            onClick={() => handleNavigation(item.path, item.external)}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
        <ListItem button onClick={() => setModalShow(true)}>
          <ListItemIcon><HeadsetMicIcon /></ListItemIcon>
          <ListItemText primary="Contact Support" />
        </ListItem>
      </List>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </ListGroup>
  );
};

export default NavBar;
