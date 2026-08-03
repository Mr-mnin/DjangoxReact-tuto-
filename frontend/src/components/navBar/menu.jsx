import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/Nsymb.png";

export default function NestedList() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);

  };
  const location = useLocation();
  const path = location.pathname;
  console .log("Current path:", path); 


  return (
    <>
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
  
      <ListItemButton onClick={handleClick} component={Link} to="" selected={path === "/"}>
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
        <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Creating records
        </ListSubheader>
      }
    >
  
      <ListItemButton component={Link} to="/c" selected={path === "/c"}>
        <ListItemIcon>
          <AddBoxIcon />
        </ListItemIcon>
         <ListItemText primary="Create Clubs" />
       
      </ListItemButton>
      
    </List>
      </> 
  );
}
