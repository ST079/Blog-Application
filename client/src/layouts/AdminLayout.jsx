import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminPanel from '../pages/Admin/AdminPanel'
import "../styles/AdminLayout.css"
const AdminLayout = () => {
  return (
    <div>
      <AdminPanel />
      <div className="side-content p-4">
        <Outlet />
      </div>
    </div>
  );
}

export default AdminLayout