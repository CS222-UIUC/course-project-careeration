import './App.css'
import Header from './Header'
import Footer from './Footer'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Signup from './Signup'
import Login from './Login'
import React, { useState } from 'react'

function App() {
  const [userID, setUserID] = useState("")

  return (
    <Router>
      <Header userID={userID} getUserID={(u)=>setUserID(u)}/>
      <Routes>
        <Route path="/signup" element={<Signup getUserID={(u)=>setUserID(u)}/>}/>
        <Route path="/login" element={<Login getUserID={(u)=>setUserID(u)}/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
