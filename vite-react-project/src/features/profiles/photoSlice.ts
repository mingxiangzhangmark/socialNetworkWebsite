import { createGenericSlice, GenericState } from "../../app/store/genericSlice";
import { Photo } from "../../app/types/profile";

type State = {
    data: Photo[];
}

const initialState: State = {
    data: []
}

export const photoSlice = createGenericSlice({
    name:  'photo',
    initialState: initialState as GenericState<Photo[]>,
    reducers:{

    }
})

export const actions = photoSlice.actions;
