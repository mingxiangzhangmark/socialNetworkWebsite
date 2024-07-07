// import React from 'react'

import { Link } from "react-router-dom";
import { Button, Container, Header, Segment, Image, Icon } from "semantic-ui-react";

export default function homePage() {
  return (
   <Segment inverted textAlign="center" vertical className="masthead">
    <Container>
        <Header as="h1" inverted>
            <Image size="massive" src="/logo.png" style={{marginBottom: 12}} />
            Social NetWork App
        </Header>
        <Button size="huge" inverted as = {Link} to ='/events'>
            Get Started
            <Icon name="caret right" inverted />
        </Button>
    </Container>

   </Segment>
  )
}
