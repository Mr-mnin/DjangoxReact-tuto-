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
import "../style.css";
export default function Menu() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);

  };
  const location = useLocation();
  const path = location.pathname;
  console.log("Current path:", path);

  const countries = [
    "England",
    "India",
    "USA",
    "Netherlands",
    "Spain",
    "Germany",
    "Italy",
    "France",
    "Portugal",
    "Brazil",
    "Argentina",
    "Belgium",
  ];

  return (
    <>
      <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader" className="subheader">
            Football clubs
          </ListSubheader>
        }
      >

        <ListItemButton onClick={handleClick} component={Link} to="/" selected={path === "/" && !location.search}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary={<b>All Clubs</b>} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {countries.map((country) => (
              <ListItemButton
                key={country}
                sx={{ pl: 4 }}
                component={Link}
                to={`/?country=${country}`}
                selected={location.search === `?country=${country}`}
              >
                <ListItemIcon>
                  <DashboardCustomizeIcon />
                </ListItemIcon>
                <ListItemText primary={country} />
              </ListItemButton>
            ))}
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