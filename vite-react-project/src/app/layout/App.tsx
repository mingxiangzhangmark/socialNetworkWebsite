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
import { AppEvent } from "../types/event";

function App() {
  const [formOpen, setFormOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<AppEvent | null>(null);

  function handleSecectedEvent(event: AppEvent | null){
    setSelectedEvent(event);
    setFormOpen(true);
  }

  function handleCreateFormOpen(){
    setSelectedEvent(null);
    setFormOpen(true);
  }

  return (
    <>
        <NavBar setFormOpen = {setFormOpen}/>
        <Container className="main">
         <EventDashBoard formOpen = {formOpen}  
         setFormOpen = {setFormOpen}
         selectedEvent = {selectedEvent}
         selectEvent = {handleSecectedEvent}
         /> 
        </Container>
        
        
    </>
  )
}



export default App
