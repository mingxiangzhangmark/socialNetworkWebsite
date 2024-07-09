// import React from 'react'

import { NavLink } from "react-router-dom";
import { Button, Container, Menu } from "semantic-ui-react";
import SignedOutButton from "./SignedOutButton";
import SignedInMenu from "./SignedInMenu";
// import { useState } from "react";
import { useAppSelector } from "../../store/store";
import { sampleData } from "../../api/sampleData";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../config/firebase";



export default function NavBar() {

    // const [auth, setAuth] = useState(false);
    const {authenticated} = useAppSelector(state => state.auth)

    function seedData(){
        sampleData.forEach(async event => {
            const {id, ...rest} = event;
            await setDoc(doc(db, 'events', id), {...rest})
        })
    }

   return (
    <Menu inverted={true} fixed="top">
        <Container>
            <Menu.Item header as ={NavLink} to ='/'>
                <img src="./logo.png" alt="logo" />
                Re-vents
            </Menu.Item>

            <Menu.Item name="Events" as = {NavLink} to ='/events' />
            <Menu.Item name="Scratch" as = {NavLink} to ='/scratch' />

            <Menu.Item>
                <Button 
                    as = {NavLink}
                    to = '/createEvent'
                    floated='right' 
                    positive={true} 
                    inverted={true} 
                    content='Create Event' />
            </Menu.Item>
            
            {import.meta.env.MODE  &&(
                <Menu.Item>
                    <Button 
                        onClick={seedData}
                        color="teal"
                        positive={true} 
                        inverted={true} 
                        content='Seed Data' />
                </Menu.Item>
            
            )}
            {authenticated ? <SignedInMenu /> : <SignedOutButton />}
        </Container>
    </Menu>
  )
}
