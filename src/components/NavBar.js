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
import { Button, ListGroup } from "react-bootstrap";
import FAQsModal from "./FAQsModal";
import ContactSupportModal from "./ContactSupportModal";

const NavBar = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [faqModalShow, setFaqModalShow] = useState(false);
  const [contactModalShow, setContactModalShow] = useState(false);

  const handleNavigation = (path, external) => {
    if (external) {
      window.open(path, "_blank");
    } else {
      navigate(path);
    }
  };
  const handleLogout = () => {
    setCurrentUser(null);
    // Perform any logout actions if needed
    navigate("/login");
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
          { text: "Frequently Asked Questions", icon: <HelpOutlineIcon />, onClick: () => setFaqModalShow(true) },
        ].map((item) => (
          <ListItem
            button
            key={item.text}
            onClick={item.onClick ? item.onClick : () => handleNavigation(item.path, item.external)}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
        <ListItem button onClick={() => setContactModalShow(true)}>
          <ListItemIcon><HeadsetMicIcon /></ListItemIcon>
          <ListItemText primary="Contact Support" />
        </ListItem>
      </List>
      <FAQsModal
        show={faqModalShow}
        onHide={() => setFaqModalShow(false)}
      />
      <ContactSupportModal
        show={contactModalShow}
        onHide={() => setContactModalShow(false)}
      />
      <Button variant="primary"  onClick={handleLogout}>
        Logout
      </Button>
    </ListGroup>
  );
};

export default NavBar;
