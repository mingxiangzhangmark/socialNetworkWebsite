import { createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import EventDashBoard from "../../features/events/dashboard/EventDashBoard";
import EventDetailedPage from "../../features/events/details/EventDetailedPage";
import EventForm from "../../features/events/form/EventForm";
import Scratch from "../../features/scratch/Scratch";
import AccountPage from "../../features/auth/AccountPage";
import ProfilePage from "../../features/profiles/ProfilePage";
import RequireAuth from "./RequireAuth";
import UnauthComponent from "../layout/UnauthComponent";

export const router= createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children:[
            {element: <RequireAuth/>, children:[
                {path: "/manage/:id", element: <EventForm/>},
                {path: "/profiles/:id", element: <ProfilePage/>},
                {path: "/account", element: <AccountPage/>},
                {path: "/createEvent", element: <EventForm key='create'/>},
                
            ]},
            {path: "/events", element: <EventDashBoard/>},
            {path: "/events/:id", element: <EventDetailedPage/>},
            {path: "/scratch", element: <Scratch/>},
            {path: "/unauthorised", element: <UnauthComponent/>},
            // {path: "/account", element: <AccountPage/>},
            // {path: "/profiles/:id", element: <ProfilePage/>},
            
        ]
    }
])