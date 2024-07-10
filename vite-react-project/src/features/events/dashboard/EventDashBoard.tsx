

import { Grid } from "semantic-ui-react";
import EventList from "./EventList";
import {  useAppSelector } from "../../../app/store/store";
import { useEffect} from "react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { actions } from "../eventSlice";
import { useFirestore } from "../../../app/hooks/firestore/useFirestore";



export default function EventDashBoard() {
  const {data: events, status} = useAppSelector(state => state.events);
  const {loadCollection} = useFirestore('events');

  useEffect(()=>{
    loadCollection(actions);
  },[loadCollection])

  if(status ==='loading') return <LoadingComponent/>

  return (
    <Grid>
        <Grid.Column width={10}>
           <EventList events={events}/>
        </Grid.Column>
        <Grid.Column width={6}>
          <h2>Filters</h2>
        </Grid.Column>
    </Grid>
  )
}
