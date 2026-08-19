import { Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";
import Home from "./components/home.jsx";
import Delete from "./components/delete";
import Create from "./components/create";
import Edit from "./components/edit";
import Navbar from "./components/navBar/navbar.jsx";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#0b1120",
      paper: "#111827",
    },
    primary: {
      main: "#60a5fa",
    },
    text: {
      primary: "#e5e7eb",
      secondary: "#94a3b8",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Navbar
        content={
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="/e/:id" element={<Edit />} />
            <Route path="/d/:id" element={<Delete />} />
            <Route path="/c" element={<Create />} />
          </Routes>
        }
      />
    </ThemeProvider>
  );
}

export default App;
