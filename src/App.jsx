import Navbar from "./components/Navbar"
import Form from "./components/Form"
import React, { useState, useEffect } from "react"
function App() {

const [mode , setMode] = useState (localStorage.getItem("mode"));

localStorage.setItem("mode", mode);

useEffect(() => {
  document.body.style.backgroundColor = mode === 'light' ? "white" : "#2d2733";
}, [mode]);


const modeButton = () => {
  setMode(mode === 'light' ? 'dark' : 'light');
}

  return (
    <>
    <Navbar title = "Utility" mode={mode} toggleMode = {modeButton}/>
    <Form mode = {mode}/> 
    </>
  )
}

export default App
