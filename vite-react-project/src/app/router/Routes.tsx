import { createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import EventDashBoard from "../../features/events/dashboard/EventDashBoard";
import EventDetailedPage from "../../features/events/details/EventDetailedPage";
import EventForm from "../../features/events/form/EventForm";

export const router= createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children:[
            {path: "/events", element: <EventDashBoard/>},
            {path: "/events/:id", element: <EventDetailedPage/>},
            {path: "/manage/:id", element: <EventForm/>},
            {path: "/createEvent", element: <EventForm/>},
        ]
    }
])