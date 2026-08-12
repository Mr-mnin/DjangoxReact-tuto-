import React, { useState } from "react";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menumini from "./menumini";
import Menu from "./menu";
import logo from "../../assets/nd.png";
const drawerWidth = 240;
const minidrawerWidth = 60;

export default function Navbar({ content }) {
  
  const [isbigmenu, setIsbigmenu] = useState(true);
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar  className="toolbar">
            
            <IconButton sx={{ mr: 4 }}
              color="inherit"
              onClick={() => setIsbigmenu(!isbigmenu)}
            >
              {isbigmenu ? <MenuOpenIcon /> : <MenuIcon />}
            </IconButton>
          <img src={logo} alt="Logo" style={{ width: "120px", height: "50px", marginleft: "10px" }} />
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: isbigmenu ?  drawerWidth : minidrawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: isbigmenu ?  drawerWidth : minidrawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
         {isbigmenu ? <Menu /> : <Menumini />}
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 4, ml: "5px" }}>
        <Toolbar />
            {content}
      </Box>
    </Box>
  );
}
