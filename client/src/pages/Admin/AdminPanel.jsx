import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/AdminPanel.css";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/admin/logo.png"

const AdminPanel = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const { pathname } = useLocation();

  return (
    <div className="admin-container">
      {/* Top Navigation Bar */}
      <nav className="admin-navbar">
        <div className="nav-left">
          <button
            className="btn btn-sm btn-outline-secondary me-3 hidden"
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          >
            <i className={`fas fa-${sidebarCollapsed ? "bars" : "times"}`}></i>
          </button>
          <h5 className="mb-0">BMC Blog Admin Panel</h5>
        </div>
        <div className="nav-right">
          <div className="notifications me-3">
            <button className="btn btn-sm btn-outline-secondary position-relative">
              <i className="fas fa-bell"></i>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                3
              </span>
            </button>
          </div>
          <div className="admin-profile">
            <img
              src="https://randomuser.me/api/portraits/men/41.jpg"
              alt="Admin"
              className="admin-avatar rounded-circle"
            />
            <span className="admin-name ms-2">Admin User</span>
          </div>
        </div>
      </nav>

      <div className="admin-content">
        {/* Sidebar */}
        <div className={`admin-sidebar ${sidebarCollapsed ? "collapsed" : ""}`}>
          <div className="sidebar-header">
            <img src={logo} alt="BMC Logo" className="college-logo" />
            <h6>Bhaktapur Multiple Campus</h6>
          </div>

          <ul className="sidebar-menu">
            <li className={pathname === "/admin" ? "active" : ""}>
              <Link to="/admin">
                <i className="fas fa-tachometer-alt"></i>
                <span>Dashboard</span>
              </Link>
            </li>
            <li className={pathname === "/admin/blog-manager" ? "active" : ""}>
              <Link to="/admin/blog-manager">
                <i className="fas fa-file-alt"></i>
                <span>Blogs</span>
              </Link>
            </li>
            <li className={pathname === "users" ? "active" : ""}>
              <Link to="/admin/user-manager">
                <i className="fas fa-users"></i>
                <span>Users</span>
              </Link>
            </li>
            <li className={pathname === "comments" ? "active" : ""}>
              <Link to="#comments">
                <i className="fas fa-comments"></i>
                <span>Comments</span>
              </Link>
            </li>
            <li className={pathname === "media" ? "active" : ""}>
              <Link to="#media">
                <i className="fas fa-photo-video"></i>
                <span>Media Library</span>
              </Link>
            </li>
            <li className="disabled">
              <Link to="">
                <i className="fas fa-cog"></i>
                <span>Settings</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
