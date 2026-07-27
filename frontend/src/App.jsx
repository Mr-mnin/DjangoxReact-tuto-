import { useState } from 'react'
import { Route, Routes } from 'react-router'
import './App.css'
import Home from './components/home'
import edit from './components/edit'
import Delete from './components/delete'
import Create from './components/create'
import Edit from './components/edit'
import Navbar from './components/navBar/navbar'

function App() {


  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="e/:id" element={<Edit />} />
        <Route path="/d/:id" element={<Delete />} />
        <Route path="/c" element={<Create />} />
      </Routes>
    </>
  );
}

export default App
