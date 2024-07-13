import { Item, Segment,Icon, List, Button, Label} from "semantic-ui-react";
import EventListAttendee from "./EventListAttendee";
import { AppEvent } from "../../../app/types/event";
import { Link } from "react-router-dom";
import { format } from "date-fns";

// import { remove } from "firebase/database";
// import { useDispatch } from "react-redux";
// import { deleteEvent } from "../eventSlice";
// import { useState } from "react";
// import { toast } from "react-toastify";
// import { deleteDoc, doc } from "firebase/firestore";
// import { db } from "../../../app/config/firebase";


type Props = {
    event: AppEvent;
}

export default function EventListItem({event}:Props) {


  return (
    <Segment.Group>
        <Segment>
            <Item.Group>
                <Item>
                    <Item.Image size='tiny' circular src={event.hostPhotoURL || '/user.png'} />
                    <Item.Content>
                        <Item.Header content={event.title} />
                        <Item.Description>
                            Hosted by {event.hostedBy}
                        </Item.Description>
                        {event.isCancelled && (
                            <Label 
                            style={{top: '-40px'}}
                            ribbon='right'
                            color='red'
                            content='This event has been cancelled'
                            />
                        )}
                    </Item.Content>
                </Item>
            </Item.Group>
        </Segment>

        <Segment>
            <span>
                <Icon name='clock' /> {format(new Date(event.date), 'dd MMM yyyy, h:mm a')}
                <Icon name='marker' /> {event.venue}
            </span>
        </Segment>

        <Segment secondary>
            <List horizontal>
                {event.attendees.map(attendee => (
                    <EventListAttendee key = {attendee.id} attendee ={attendee}/>
                ))}
               
            </List>
        </Segment>

        <Segment clearing>
            <span>{event.description}</span>

           <Button as = {Link} to = {`/events/${event.id}`} color='teal' floated='right' content='View'  />
        </Segment>
    </Segment.Group>    
  )
}

