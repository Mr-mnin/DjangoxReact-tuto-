import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import Icon from '@mdi/react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';

export default function NestedList() {
  const [open, setOpen] = React.useState(true);
  const MdiIcon = Icon?.default ?? Icon;

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Football clubs
        </ListSubheader>
      }
    >
  
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="All Clubs" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
                <DashboardCustomizeIcon />
              </ListItemIcon>
            <ListItemText primary="England" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <DashboardCustomizeIcon />  
            </ListItemIcon>
            <ListItemText primary="India" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <DashboardCustomizeIcon />
            </ListItemIcon>
            <ListItemText primary="USA" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <DashboardCustomizeIcon />
            </ListItemIcon>
            <ListItemText primary="Netherlands" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}
