import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import AssignmentIcon from '@mui/icons-material/Assignment';
import EventIcon from '@mui/icons-material/Event';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { UserContext } from '../context/UserContext';
import { Navigate } from 'react-router-dom';
import { Padding } from '@mui/icons-material';

const NavBar = () => {
  const { currentUser } = useContext(UserContext);


  const list = (
    
      <List>
        { currentUser ? (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', padding: '20px' }}>
            <span style={{fontWeight: 'bold'}}>Welcome, {currentUser.username}</span>
          </div>
              
          ) : (
            <Navigate to="/login" />
          )
        }
        {['Home', 'Assignments', 'Upcoming slots', 'Read user guide', 'Contact Support', 'Frequently Asked Questions'].map((text, index) => {
          let icon;
          switch (text) {
            case 'Home':
              icon = <HomeIcon />;
              break;
            case 'Assignments':
              icon = <AssignmentIcon />;
              break;
            case 'Upcoming slots':
              icon = <EventIcon />;
              break;
            case 'Read user guide':
              icon = <PictureAsPdfIcon />;
              break;
            case 'Contact Support':
              icon = <HeadsetMicIcon />;
              break;
            case 'Frequently Asked Questions':
              icon = <HelpOutlineIcon />;
              break;
            default:
              break;
          }
          return (
            <div>
              
            <ListItem button key={text}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
            </div>
          );
        })}
      </List>
    
  );

  return (
    <div>
    
    <Drawer
      variant="persistent"
      
      open={true}
    >
      {list}
    </Drawer>
    </div>
  );
};

export default NavBar;
