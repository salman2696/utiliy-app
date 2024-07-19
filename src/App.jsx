import Navbar from "./components/Navbar"
import Form from "./components/Form"
import React, { useState, useEffect } from "react"
function App() {

const [mode , setMode] = useState (localStorage.getItem("mode"));

useEffect(() => {
  if (mode === 'light') {
    document.body.style.backgroundColor = "white";
  } else {
    document.body.style.backgroundColor = "#2d2733";
  }
  localStorage.setItem("mode", mode);
}, [mode]);

const modeButton = () => {
  if (mode === 'light') {
    setMode('dark')
    document.body.style.backgroundColor = "#2d2733";
  }

  else {
    setMode('light')
    document.body.style.backgroundColor = "white";
  }
}

  return (
    <>
    <Navbar title = "Utility" mode={mode} toggleMode = {modeButton}/>
    <Form mode = {mode}/> 
    </>
  )
}

export default App
