import { Card , Image} from "semantic-ui-react"
import { Profile } from "../../../app/types/profile"
import { Link } from "react-router-dom"

// import React from 'react'
type Props = {
    profile: Partial<Profile>
}

export default function FollowCard({profile}:Props) {
  return (
   <Card as ={Link} to ={`profile/${profile.id}`}>
        <Image src={profile.photoURL || '/user.png'} />
        <Card.Content>
            <Card.Header content={profile.displayName}/>
        </Card.Content>
   </Card>
  )
}

