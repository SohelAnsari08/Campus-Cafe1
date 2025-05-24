import React from 'react'
import { Navigate } from 'react-router'

export const PrivateRoute = ({isLoggedIn, children}) => {
    if(isLoggedIn){
        return children
    }
    else{
        return <Navigate to="/login"/>
    }
}
