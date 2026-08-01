import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home.jsx";
import Delete from "./components/delete";
import Create from "./components/create";
import Edit from "./components/edit";
import Navbar from "./components/navBar/navbar.jsx";

function App() {
  return (
    <>
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
      
    </>
  );
}

export default App;
