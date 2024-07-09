// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { sampleData } from "../../app/api/sampleData";
import { AppEvent } from "../../app/types/event";
import { Timestamp } from "firebase/firestore";
import { createGenericSlice, GenericActions, GenericState } from "../../app/store/genericSlice";
import { PayloadAction } from "@reduxjs/toolkit";

type State = {
    data: AppEvent[];
}

const initialState: State = {
    data: []
}

export const eventSlice = createGenericSlice({
    name: 'events',
    initialState: initialState as GenericState<AppEvent[]>,
    reducers:{
      
        success : {
            reducer:(state, action:PayloadAction<AppEvent[]>) => {
                state.data = action.payload;
                state.status = 'finished';
            },
            prepare: (events: any) => {
                let eventsArray : AppEvent[] =[];
                Array.isArray(events) ? eventsArray = events : eventsArray.push(events);
                const mapped = eventsArray.map((e:any) => {
                    return {
                        ...e,
                        date: (e.date as Timestamp).toDate().toISOString()
                    }
                });
                return {payload: mapped};
            }
        },

    }
})

export const actions = eventSlice.actions as GenericActions<AppEvent[]>;