import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
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

const NavBar = () => {
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <ListGroup>
      <List >
        <div className="navbar" >
          <img className="logo-home" src="/assets/logo-home.png" alt="logo" />
        </div>
        {currentUser ? (
          <div className="welcome">
            <span>Welcome, {currentUser.username}  </span>
            <a href="/login">Logout</a>
          </div>
        ) : (
          <Navigate to="/login" />
        )}
        {[
          { text: "Home", icon: <HomeIcon />, path: "/home" },
          {
            text: "Assignments",
            icon: <AssignmentIcon />,
            path: "/assignment",
          },
          {
            text: "Upcoming slots",
            icon: <EventIcon />,
            path: "/upcoming-slot",
          },
          {
            text: "Read user guide",
            icon: <PictureAsPdfIcon />,
            path: "/user-guide",
          },
          {
            text: "Contact Support",
            icon: <HeadsetMicIcon />,
            path: "/contact-support",
          },
          {
            text: "Frequently Asked Questions",
            icon: <HelpOutlineIcon />,
            path: "/faq",
          },
        ].map((item) => (
          <ListItem
            button
            key={item.text}
            onClick={() => handleNavigation(item.path)}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </ListGroup>
  );
};

export default NavBar;
