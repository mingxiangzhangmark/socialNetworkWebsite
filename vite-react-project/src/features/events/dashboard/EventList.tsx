// import React from 'react'
/* eslint-disable @typescript-eslint/no-explicit-any */


import { AppEvent } from "../../../app/types/event";
import EventListItem from "./EventListItem";

type Props = {
    events: AppEvent[];
}

export default function EventList({events}: Props) {
  return (
    <>
        {events.map((event) => (
             <EventListItem key={event.id} event ={event}/>
        ))}
    </>
  )
}
