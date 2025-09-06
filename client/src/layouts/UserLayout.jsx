import React from 'react'
import NavigationBar from './NavigationBar'
import { Outlet } from 'react-router-dom'

const UserLayout = () => {
  return (
    <div>
        <NavigationBar />
        <Outlet />
    </div>
  )
}

export default UserLayout