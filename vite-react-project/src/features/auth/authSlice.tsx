import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppUser} from '../../app/types/user'
import { User } from 'firebase/auth'

type State = {
    [x: string]: any
    authenticated: boolean
    currentUser: AppUser | null
}

const initialState: State = {
    authenticated: false,
    currentUser: null,
    initialStated:false
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signIn: {
            reducer: (state, action : PayloadAction<AppUser>) => {
                state.authenticated = true;
                state.currentUser = action.payload;
                state.initialStated = true;
            },
            prepare:(user: User)=>{
                const mapped: AppUser ={
                    uid: user.uid,
                    email: user.email,
                    displayName: user.displayName,
                    photoURL: user.photoURL,
                    providerId: user.providerData[0].providerId
                }
                return {payload: mapped}
            }

        },
        logout: (state) => {
            state.authenticated = false;
            state.currentUser = null;
            state.initialStated = true
        }
    }
})

export const {signIn, logout} = authSlice.actions;