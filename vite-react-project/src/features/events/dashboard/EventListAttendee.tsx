// import React from 'react'
/* eslint-disable @typescript-eslint/no-explicit-any */

import { List,Image } from "semantic-ui-react";
import { Attendee } from "../../../app/types/event";

type Props = {
    attendee: Attendee;
}

export default function EventListAttendee({attendee}:Props) {
  return (
    <>
        <List.Item>
            <Image size='mini' circular src={attendee.photoURL} />
        </List.Item>
    </>

  )
}
