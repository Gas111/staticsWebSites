import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {
  if (localStorage.getItem('accessToken')) {
    return <Outlet />
  } else {
    return <Navigate to="/" />
  }
}

export default ProtectedRoutes
