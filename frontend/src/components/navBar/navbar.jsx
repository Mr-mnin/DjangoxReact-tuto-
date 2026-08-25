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
import logo from "../../assets/nd2.png";
const drawerWidth = 240;
const minidrawerWidth = 60;

export default function Navbar({ content }) {

  const [isminimenu, setIsminimenu] = useState(true);
  const currentDrawerWidth = isminimenu ? minidrawerWidth:drawerWidth;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar className="toolbar" sx={{ display: "flex", alignItems: "center", gap: 3, ml:-1.5 }}>

          <IconButton
            color="inherit"
            onClick={() => setIsminimenu(!isminimenu)}
            sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            {isminimenu ? <MenuIcon /> : <MenuOpenIcon />}
          </IconButton>
          <img src={logo} alt="Logo" style={{ width: "120px", height: "50px" }} />
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: currentDrawerWidth,
          flexShrink: 0,
          transition: (theme) =>
            theme.transitions.create("width", {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
          [`& .MuiDrawer-paper`]: {
            width: currentDrawerWidth,
            boxSizing: "border-box",
            transition: (theme) =>
              theme.transitions.create("width", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
              }),
            overflowX: "hidden",
          },
        }}
      >
        <Toolbar />
        {isminimenu ? <Menumini /> : <Menu />}
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 4,
          width: `calc(100% - ${currentDrawerWidth}px)`,
          transition: (theme) =>
            theme.transitions.create("width", {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
        }}
      >
        <Toolbar />
        {content}
      </Box>
    </Box>
  );
}