// import React from 'react'

import { Button, Grid, Header,  TabPane } from "semantic-ui-react";
import { Profile } from "../../app/types/profile";
import { useState } from "react";
import ProfileForm from "./ProfileForm";
import { auth } from "../../app/config/firebase";



type Props = {
    profile: Profile
}

export default function profileAbout({profile}: Props) {

   
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [editMode, setEditMode] = useState(false)
    const isCurrentUser = auth.currentUser?.uid === profile.id;

  return (
    <TabPane>
        <Grid>
            <Grid.Column width={16}>
                <Header floated='left' icon='user' content={`About ${profile.displayName}`}/>
                {isCurrentUser &&
                <Button floated="right" basic content= {editMode ? 'Cancel':'Edit profile'} onClick={()=>setEditMode(!editMode)}/>}
            </Grid.Column>
            <Grid.Column width={16}>
                {editMode ? <ProfileForm profile={profile} setEditMode={setEditMode}/> : 
                    <>
                        <div style={{marginBottom: 10}}>
                            <strong>Member since: {profile.createdAt}</strong>
                            <div style={{marginTop:10}}>{profile.description}</div>
                        </div>
                    </>
                }
            </Grid.Column>
        </Grid>
    </TabPane>
  )
}
