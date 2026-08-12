import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { Link, useLocation } from "react-router-dom";

export default function Menushort() {
  

  const location = useLocation();
  const path = location.pathname;
  console.log("Current path:", path);

  return (
    <>
      <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        component="nav"
      >
        <ListItemButton  component={Link} to="/" selected={path === "/"} sx={{display: "flex", justifyContent: "center"}}>
          <ListItemIcon sx={{display: "flex", justifyContent: "center"}}>
            <DashboardIcon />
          </ListItemIcon>
        </ListItemButton>

        <ListItemButton component={Link} to="/c" selected={path === "/c"} sx={{display: "flex", justifyContent: "center"}}>
          <ListItemIcon  sx={{display: "flex", justifyContent: "center"}}>
            <AddBoxIcon />
          </ListItemIcon>
          
        </ListItemButton>
      </List>
    </>
  );
}

