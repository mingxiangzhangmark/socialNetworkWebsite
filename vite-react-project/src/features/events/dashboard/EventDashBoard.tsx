// import React from 'react'

import { Grid } from "semantic-ui-react";
import EventList from "./EventList";
import EventForm from "../form/EventForm";
import { sampleData } from "../../../app/api/sampleData";
import { useEffect, useState } from "react";
import { AppEvent } from "../../../app/types/event";
type Props = {
  formOpen: boolean;
  setFormOpen: (value: boolean) => void;
  selectEvent: (event: AppEvent | null) => void;
  selectedEvent: AppEvent | null;
};


export default function EventDashBoard({formOpen, setFormOpen, selectEvent, selectedEvent}: Props) {
  const [events, setEvents] = useState<AppEvent[]>([])

  useEffect(()=>{
    setEvents(sampleData);
  },[])

  function addEvent(newEvent: AppEvent){
    setEvents(prevState => [...prevState, newEvent]);
  }

  function updateEvent(updateEvent: AppEvent){
    setEvents(events.map(event => event.id === updateEvent.id ? updateEvent : event));
    selectEvent(null);
    setFormOpen(true)
  }

  function deleteEvent(eventId: string){
    setEvents(events.filter(event => event.id !== eventId));
  }

  return (
    <Grid>
        <Grid.Column width={10}>
           <EventList  events={events} selectEvent = {selectEvent} deleteEvent = {deleteEvent}/>
        </Grid.Column>
        <Grid.Column width={6}>
          {formOpen &&
            <EventForm setFormOpen={setFormOpen} 
            addEvent= {addEvent}
            updateEvent = {updateEvent}
            selectedEvent = {selectedEvent}
            key={selectedEvent ? selectedEvent.id : 'create'}
            />}
        </Grid.Column>
    </Grid>
  )
}
