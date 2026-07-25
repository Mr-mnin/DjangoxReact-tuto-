import { useState } from 'react'
import { Route, Routes } from 'react-router'
import './App.css'
import Home from './components/home'
import edit from './components/edit'
import Delete from './components/delete'
import Create from './components/create'


function App() {


  return (
    <>
      <Routes>
        <Route path="" element={<Home/>} />
      </Routes>
    
    </>

  )
}

export default App
