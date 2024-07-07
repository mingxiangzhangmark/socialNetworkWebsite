// import React from 'react'

import { NavLink } from "react-router-dom";
import { Button, Container, Menu } from "semantic-ui-react";
import SignedOutButton from "./SignedOutButton";
import SignedInMenu from "./SignedInMenu";
import { useState } from "react";



export default function NavBar() {

    const [auth, setAuth] = useState(false);

   return (
    <Menu inverted={true} fixed="top">
        <Container>
            <Menu.Item header as ={NavLink} to ='/'>
                <img src="./logo.png" alt="logo" />
                Re-vents
            </Menu.Item>

            <Menu.Item name="Events" as = {NavLink} to ='/events' />

            <Menu.Item>
                <Button 
                    as = {NavLink}
                    to = '/createEvent'
                    floated='right' 
                    positive={true} 
                    inverted={true} 
                    content='Create Event' />
            </Menu.Item>
            
            {auth ? <SignedInMenu setAuth = {setAuth}/> : <SignedOutButton setAuth = {setAuth}/>}
       
        </Container>
    </Menu>
  )
}
