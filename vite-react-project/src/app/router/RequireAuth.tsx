// import React from 'react'

import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppSelector } from "../store/store"


export default function RequireAuth() {
    const {authenicated, initailised} = useAppSelector(state=>state.auth);
    const location = useLocation();

    if(!authenicated && initailised){
        return <Navigate to = '/unauthorised' replace state={{from: location}}/>
    }
  return (
    <Outlet/>
  )
}
