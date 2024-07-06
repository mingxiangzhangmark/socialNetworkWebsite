// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// import React from "react";
// import { Button } from "semantic-ui-react";
import { Container } from "semantic-ui-react";
import EventDashBoard from "../../features/events/dashboard/EventDashBoard";
import NavBar from "./nav/NavBar";
import { useState } from "react";

function App() {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <>
        <NavBar setFormOpen = {setFormOpen}/>
        <Container className="main">
         <EventDashBoard formOpen = {formOpen}  setFormOpen = {setFormOpen}/> 
        </Container>
        
        
    </>
  )
}



export default App
