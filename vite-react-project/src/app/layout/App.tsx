// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// import React from "react";
// import { Button } from "semantic-ui-react";
import { Container } from "semantic-ui-react";
// import EventDashBoard from "../../features/events/dashboard/EventDashBoard";
import NavBar from "./nav/NavBar";
// import { useState } from "react";
// import { AppEvent } from "../types/event";
import { Outlet, useLocation } from "react-router-dom";
import HomePage from "../../features/events/home/HomePage";



function App() {
   const location = useLocation();

  return (
    <>
    {location.pathname === '/' ? <HomePage/>:(
      <>
      <NavBar />
            <Container className="main">
                <Outlet />
            </Container>
      </>
      )}
    </>
  )
}



export default App
