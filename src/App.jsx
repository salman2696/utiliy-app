import Navbar from "./components/Navbar"
import Form from "./components/Form"
import React, { useState } from "react"
function App() {

const [mode , setMode] = useState ('light');

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
