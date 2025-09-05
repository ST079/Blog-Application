import React from 'react'
import { Route,Routes } from 'react-router-dom'
import BmcBlog from "./pages/BmcBlog"
import BlogManager from './pages/Admin/BlogManager'
import UserManager from './pages/Admin/UserManager'
import AdminLayout from './layouts/AdminLayout'
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<BmcBlog />} />

      {/* Admin Routes */}
      <Route path="/admin" element={<AdminLayout />}>
        {/* <Route index element={<BlogManager />} /> */}
        <Route path="blog-manager" element={<BlogManager />} />
        <Route path="user-manager" element={<UserManager />} />
      </Route>
    </Routes>
  );
}

export default App