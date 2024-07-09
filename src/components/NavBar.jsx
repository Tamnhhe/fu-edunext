import React from 'react';
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

const NavBar = () => {
  const list = (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
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
            <ListItem button key={text}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={true}
    >
      {list}
    </Drawer>
  );
};

export default NavBar;
