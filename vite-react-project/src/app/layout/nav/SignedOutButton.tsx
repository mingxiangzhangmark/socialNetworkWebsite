// import React from 'react'

import { Button, Menu } from "semantic-ui-react";

type Props = {
    setAuth: (auth: boolean) => void;
}

export default function SignedOutButton({setAuth}: Props) {
  return (
    <Menu.Item position="right">
        <Button basic={true} inverted={true} content='Login' onClick={()=>setAuth(true)}/>
        <Button basic={true} inverted={true} content='Register' style={{marginLeft: '0.5em'}} />  
    </Menu.Item>  
  )
}
