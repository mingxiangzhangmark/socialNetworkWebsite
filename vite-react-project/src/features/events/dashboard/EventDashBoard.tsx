// import {Sticky } from "semantic-ui-react";

import { Grid } from "semantic-ui-react";
import EventList from "./EventList";
import {  useAppSelector } from "../../../app/store/store";
import { useEffect, useRef, useState} from "react";
// import LoadingComponent from "../../../app/layout/LoadingComponent";
import { actions } from "../eventSlice";
import { useFirestore } from "../../../app/hooks/firestore/useFirestore";
import EventFilters from "./EventFilters";
import { QueryOptions } from "../../../app/hooks/firestore/types";
import EventListItemPlaceholder from "./EventListItemPlaceholder";



export default function EventDashBoard() {
  const contextRef = useRef(null);
  const {data: events, status} = useAppSelector(state => state.events);
  const {loadCollection} = useFirestore('events');
  const [query, setQuery] = useState<QueryOptions[]>([
    {attribute:'date', operator:'>=', value:new Date()}
  ])

  useEffect(()=>{
    loadCollection(actions,{
      queries:query,
    });
  },[loadCollection, query])

  // if(status ==='loading') return <LoadingComponent/>


  return (
    <Grid>
        <Grid.Column width={10} ref={contextRef} style={{top:-20}} >
          {status ==='loading' ? (
            <>
              <EventListItemPlaceholder/>
              <EventListItemPlaceholder/>
            </>
          ):(
            <EventList events={events}/>
          )}
           <EventList events={events}/>
        </Grid.Column>
        <Grid.Column width={6}>
          <div className="ui fixed top sticky" style={{top: 78, width:405, zIndex:5}}> 
             <EventFilters setQuery= {setQuery}/>
          </div>

          {/* <Sticky context={contextRef} offset={78}>
           
            <EventFilters setQuery= {setQuery}/>
            
          </Sticky> */}
    
         
        </Grid.Column>
    </Grid>
  )
}
