import React from "react";
import { Route, Routes } from "react-router-dom";
import BlogManager from "./pages/Admin/BlogManager";
import UserManager from "./pages/Admin/UserManager";
import AdminLayout from "./layouts/AdminLayout";
import Dashboard from "./pages/Admin/Dashboard";
import CollegeBlogs from "./pages/User/CollegeBlogs";
import UserLayout from "./layouts/UserLayout";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<UserLayout />}>
        <Route index element={<CollegeBlogs />} />
      </Route>

      {/* Admin Routes */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="blog-manager" element={<BlogManager />} />
        <Route path="user-manager" element={<UserManager />} />
      </Route>
    </Routes>
  );
};

export default App;
