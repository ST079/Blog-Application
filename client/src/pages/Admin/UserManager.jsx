import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/UserManager.css";

const UserManager = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Rajesh Sharma",
      email: "rajesh@example.com",
      role: "Admin",
      status: "Active",
      joinDate: "2023-01-15",
      lastLogin: "2023-05-20",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      posts: 24,
      comments: 42,
    },
    {
      id: 2,
      name: "Sita Gurung",
      email: "sita@example.com",
      role: "Author",
      status: "Active",
      joinDate: "2023-02-10",
      lastLogin: "2023-05-18",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      posts: 18,
      comments: 35,
    },
    {
      id: 3,
      name: "Amit Patel",
      email: "amit@example.com",
      role: "Editor",
      status: "Inactive",
      joinDate: "2023-03-05",
      lastLogin: "2023-05-10",
      avatar: "https://randomuser.me/api/portraits/men/22.jpg",
      posts: 12,
      comments: 28,
    },
    {
      id: 4,
      name: "Priya Singh",
      email: "priya@example.com",
      role: "Author",
      status: "Active",
      joinDate: "2023-04-20",
      lastLogin: "2023-05-22",
      avatar: "https://randomuser.me/api/portraits/women/28.jpg",
      posts: 8,
      comments: 15,
    },
    {
      id: 5,
      name: "Bikash Thapa",
      email: "bikash@example.com",
      role: "Subscriber",
      status: "Active",
      joinDate: "2023-05-01",
      lastLogin: "2023-05-21",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      posts: 0,
      comments: 5,
    },
  ]);

  const [filteredUsers, setFilteredUsers] = useState(users);
  const [searchQuery, setSearchQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [sortBy, setSortBy] = useState("name");
  const [isLoading, setIsLoading] = useState(false);
  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    role: "Author",
    status: "Active",
  });
  const [editingUser, setEditingUser] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [viewMode, setViewMode] = useState("table"); // 'table' or 'card'
  const [stats, setStats] = useState({
    total: 0,
    active: 0,
    creators: 0,
    admins: 0,
  });

  // Calculate stats whenever users change
  useEffect(() => {
    setStats({
      total: users.length,
      active: users.filter((u) => u.status === "Active").length,
      creators: users.filter((u) => u.role === "Author" || u.role === "Editor")
        .length,
      admins: users.filter((u) => u.role === "Admin").length,
    });
  }, [users]);

  // Filter users based on search, role, and status
  useEffect(() => {
    let result = users;

    // Apply search filter
    if (searchQuery) {
      result = result.filter(
        (user) =>
          user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          user.email.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply role filter
    if (roleFilter !== "All") {
      result = result.filter((user) => user.role === roleFilter);
    }

    // Apply status filter
    if (statusFilter !== "All") {
      result = result.filter((user) => user.status === statusFilter);
    }

    // Apply sorting
    result = [...result].sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "joinDate")
        return new Date(b.joinDate) - new Date(a.joinDate);
      if (sortBy === "posts") return b.posts - a.posts;
      return 0;
    });

    setFilteredUsers(result);
  }, [users, searchQuery, roleFilter, statusFilter, sortBy]);

  // Handle user deletion
  const handleDeleteUser = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers(users.filter((user) => user.id !== id));
    }
  };

  // Handle status toggle
  const handleToggleStatus = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id
          ? {
              ...user,
              status: user.status === "Active" ? "Inactive" : "Active",
            }
          : user
      )
    );
  };

  // Handle adding new user
  const handleAddUser = () => {
    if (newUser.name && newUser.email) {
      const newUserObj = {
        ...newUser,
        id: Math.max(...users.map((u) => u.id)) + 1,
        joinDate: new Date().toISOString().split("T")[0],
        lastLogin: new Date().toISOString().split("T")[0],
        avatar: `https://randomuser.me/api/portraits/${
          Math.random() > 0.5 ? "men" : "women"
        }/${Math.floor(Math.random() * 50)}.jpg`,
        posts: 0,
        comments: 0,
      };

      setUsers([...users, newUserObj]);
      setNewUser({ name: "", email: "", role: "Author", status: "Active" });
      setShowAddUserModal(false);
    }
  };

  // Handle editing user
  const handleEditUser = () => {
    if (editingUser.name && editingUser.email) {
      setUsers(
        users.map((user) => (user.id === editingUser.id ? editingUser : user))
      );
      setShowEditModal(false);
      setEditingUser(null);
    }
  };

  // Open edit modal with user data
  const openEditModal = (user) => {
    setEditingUser({ ...user });
    setShowEditModal(true);
  };

  // Simulate loading for demo purposes
  const simulateLoading = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1500);
  };

  // Export users data
  const exportUsers = () => {
    const dataStr = JSON.stringify(users, null, 2);
    const dataUri =
      "data:application/json;charset=utf-8," + encodeURIComponent(dataStr);

    const exportFileDefaultName = "users.json";

    const linkElement = document.createElement("a");
    linkElement.setAttribute("href", dataUri);
    linkElement.setAttribute("download", exportFileDefaultName);
    linkElement.click();
  };

  return (
    <div>
      {/* User Stats Section with animated counters */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold">User Statistics</h2>
          <div className="row text-center">
            <div className="col-md-3 col-6 mb-4">
              <div className="stat-item">
                <div className="stat-icon text-primary">
                  <i className="fas fa-users fa-2x"></i>
                </div>
                <h3 className="stat-number">{stats.total}</h3>
                <p className="stat-label">Total Users</p>
              </div>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <div className="stat-item">
                <div className="stat-icon text-success">
                  <i className="fas fa-user-check fa-2x"></i>
                </div>
                <h3 className="stat-number">{stats.active}</h3>
                <p className="stat-label">Active Users</p>
              </div>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <div className="stat-item">
                <div className="stat-icon text-warning">
                  <i className="fas fa-edit fa-2x"></i>
                </div>
                <h3 className="stat-number">{stats.creators}</h3>
                <p className="stat-label">Content Creators</p>
              </div>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <div className="stat-item">
                <div className="stat-icon text-info">
                  <i className="fas fa-shield-alt fa-2x"></i>
                </div>
                <h3 className="stat-number">{stats.admins}</h3>
                <p className="stat-label">Administrators</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Management Section */}
      <section className="py-5">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="fw-bold">User Management</h2>

            <div className="d-flex align-items-center gap-2">
              {/* View Mode Toggle */}
              <div className="btn-group" role="group">
                <button
                  type="button"
                  className={`btn btn-outline-primary ${
                    viewMode === "table" ? "active" : ""
                  }`}
                  onClick={() => setViewMode("table")}
                >
                  <i className="fas fa-table me-1"></i> Table
                </button>
                <button
                  type="button"
                  className={`btn btn-outline-primary ${
                    viewMode === "card" ? "active" : ""
                  }`}
                  onClick={() => setViewMode("card")}
                >
                  <i className="fas fa-th-large me-1"></i> Cards
                </button>
              </div>

              {/* Export Button */}
              <button
                className="btn btn-outline-secondary"
                onClick={exportUsers}
              >
                <i className="fas fa-download me-1"></i> Export
              </button>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="row mb-4">
            <div className="col-md-6">
              <div className="search-bar">
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fas fa-search"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search users by name or email..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="d-flex gap-2 justify-content-end">
                <div className="filter-select">
                  <select
                    className="form-select"
                    value={roleFilter}
                    onChange={(e) => setRoleFilter(e.target.value)}
                  >
                    <option value="All">All Roles</option>
                    <option value="Admin">Admin</option>
                    <option value="Editor">Editor</option>
                    <option value="Author">Author</option>
                    <option value="Subscriber">Subscriber</option>
                  </select>
                </div>
                <div className="filter-select">
                  <select
                    className="form-select"
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                  >
                    <option value="All">All Status</option>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
                <div className="filter-select">
                  <select
                    className="form-select"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="name">Name</option>
                    <option value="joinDate">Join Date</option>
                    <option value="posts">Posts</option>
                  </select>
                </div>
                <button
                  className="btn btn-campus"
                  onClick={() => setShowAddUserModal(true)}
                >
                  <i className="fas fa-plus me-2"></i>Add User
                </button>
              </div>
            </div>
          </div>

          {filteredUsers.length === 0 ? (
            <div className="text-center py-5">
              <i className="fas fa-users fa-3x text-muted mb-3"></i>
              <h4>No users found</h4>
              <p>Try adjusting your search or filters</p>
            </div>
          ) : viewMode === "table" ? (
            // Table View
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-body p-0">
                    <div className="table-responsive">
                      <table className="table table-hover user-table">
                        <thead>
                          <tr>
                            <th>User</th>
                            <th>Role</th>
                            <th>Status</th>
                            <th>Join Date</th>
                            <th>Last Login</th>
                            <th>Posts</th>
                            <th>Comments</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {filteredUsers.map((user) => (
                            <tr key={user.id}>
                              <td>
                                <div className="d-flex align-items-center">
                                  <img
                                    src={user.avatar}
                                    alt={user.name}
                                    className="user-avatar rounded-circle me-3"
                                  />
                                  <div>
                                    <div className="fw-bold">{user.name}</div>
                                    <div className="text-muted small">
                                      {user.email}
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <span
                                  className={`badge bg-${getRoleColor(
                                    user.role
                                  )}`}
                                >
                                  {user.role}
                                </span>
                              </td>
                              <td>
                                <span
                                  className={`badge bg-${
                                    user.status === "Active"
                                      ? "success"
                                      : "secondary"
                                  }`}
                                >
                                  {user.status}
                                </span>
                              </td>
                              <td>{formatDate(user.joinDate)}</td>
                              <td>{formatDate(user.lastLogin)}</td>
                              <td>{user.posts}</td>
                              <td>{user.comments}</td>
                              <td>
                                <div className="btn-group">
                                  <button
                                    className="btn btn-sm btn-outline-primary"
                                    title="Edit User"
                                    onClick={() => openEditModal(user)}
                                  >
                                    <i className="fas fa-edit"></i>
                                  </button>
                                  <button
                                    className={`btn btn-sm ${
                                      user.status === "Active"
                                        ? "btn-outline-warning"
                                        : "btn-outline-success"
                                    }`}
                                    onClick={() => handleToggleStatus(user.id)}
                                    title={
                                      user.status === "Active"
                                        ? "Deactivate User"
                                        : "Activate User"
                                    }
                                  >
                                    <i
                                      className={`fas fa-${
                                        user.status === "Active"
                                          ? "user-times"
                                          : "user-check"
                                      }`}
                                    ></i>
                                  </button>
                                  <button
                                    className="btn btn-sm btn-outline-danger"
                                    onClick={() => handleDeleteUser(user.id)}
                                    title="Delete User"
                                  >
                                    <i className="fas fa-trash"></i>
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            // Card View
            <div className="row">
              {filteredUsers.map((user) => (
                <div key={user.id} className="col-md-6 col-lg-4 mb-4">
                  <div className="card user-card h-100">
                    <div className="card-body">
                      <div className="d-flex align-items-center mb-3">
                        <img
                          src={user.avatar}
                          alt={user.name}
                          className="user-avatar-lg rounded-circle me-3"
                        />
                        <div>
                          <h5 className="card-title mb-0">{user.name}</h5>
                          <p className="text-muted mb-0 small">{user.email}</p>
                        </div>
                      </div>

                      <div className="d-flex justify-content-between mb-3">
                        <span className={`badge bg-${getRoleColor(user.role)}`}>
                          {user.role}
                        </span>
                        <span
                          className={`badge bg-${
                            user.status === "Active" ? "success" : "secondary"
                          }`}
                        >
                          {user.status}
                        </span>
                      </div>

                      <div className="row text-center mb-3">
                        <div className="col-4">
                          <div className="fw-bold">{user.posts}</div>
                          <div className="small text-muted">Posts</div>
                        </div>
                        <div className="col-4">
                          <div className="fw-bold">{user.comments}</div>
                          <div className="small text-muted">Comments</div>
                        </div>
                        <div className="col-4">
                          <div className="fw-bold">
                            {daysSince(user.joinDate)}
                          </div>
                          <div className="small text-muted">Days ago</div>
                        </div>
                      </div>

                      <div className="d-flex justify-content-between">
                        <button
                          className="btn btn-sm btn-outline-primary"
                          onClick={() => openEditModal(user)}
                        >
                          <i className="fas fa-edit me-1"></i> Edit
                        </button>
                        <button
                          className={`btn btn-sm ${
                            user.status === "Active"
                              ? "btn-outline-warning"
                              : "btn-outline-success"
                          }`}
                          onClick={() => handleToggleStatus(user.id)}
                        >
                          <i
                            className={`fas fa-${
                              user.status === "Active"
                                ? "user-times"
                                : "user-check"
                            } me-1`}
                          ></i>
                          {user.status === "Active" ? "Deactivate" : "Activate"}
                        </button>
                        <button
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => handleDeleteUser(user.id)}
                        >
                          <i className="fas fa-trash"></i>
                        </button>
                      </div>
                    </div>
                    <div className="card-footer bg-transparent">
                      <small className="text-muted">
                        Joined {formatDate(user.joinDate)} • Last login{" "}
                        {formatDate(user.lastLogin)}
                      </small>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Add User Modal */}
      {showAddUserModal && (
        <div className="modal fade show d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add New User</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowAddUserModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    className="form-control"
                    value={newUser.name}
                    onChange={(e) =>
                      setNewUser({ ...newUser, name: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email Address *</label>
                  <input
                    type="email"
                    className="form-control"
                    value={newUser.email}
                    onChange={(e) =>
                      setNewUser({ ...newUser, email: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Role</label>
                  <select
                    className="form-select"
                    value={newUser.role}
                    onChange={(e) =>
                      setNewUser({ ...newUser, role: e.target.value })
                    }
                  >
                    <option value="Admin">Admin</option>
                    <option value="Editor">Editor</option>
                    <option value="Author">Author</option>
                    <option value="Subscriber">Subscriber</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Status</label>
                  <select
                    className="form-select"
                    value={newUser.status}
                    onChange={(e) =>
                      setNewUser({ ...newUser, status: e.target.value })
                    }
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowAddUserModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-campus"
                  onClick={handleAddUser}
                >
                  Add User
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit User Modal */}
      {showEditModal && editingUser && (
        <div className="modal fade show d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit User</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowEditModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    className="form-control"
                    value={editingUser.name}
                    onChange={(e) =>
                      setEditingUser({ ...editingUser, name: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email Address *</label>
                  <input
                    type="email"
                    className="form-control"
                    value={editingUser.email}
                    onChange={(e) =>
                      setEditingUser({ ...editingUser, email: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Role</label>
                  <select
                    className="form-select"
                    value={editingUser.role}
                    onChange={(e) =>
                      setEditingUser({ ...editingUser, role: e.target.value })
                    }
                  >
                    <option value="Admin">Admin</option>
                    <option value="Editor">Editor</option>
                    <option value="Author">Author</option>
                    <option value="Subscriber">Subscriber</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Status</label>
                  <select
                    className="form-select"
                    value={editingUser.status}
                    onChange={(e) =>
                      setEditingUser({ ...editingUser, status: e.target.value })
                    }
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowEditModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-campus"
                  onClick={handleEditUser}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-4">
              <h4>BMC User Manager</h4>
              <p>Bhaktapur Multiple Campus</p>
              <p>Dudpati, Bhaktapur, Nepal</p>
              <p>Email: admin@bmc.edu.np</p>
              <p>Phone: +977 1-6612345</p>
            </div>
            <div className="col-md-2 mb-4">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    Users
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    Roles
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    Permissions
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-2 mb-4">
              <h5>User Types</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    Administrators
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    Editors
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    Authors
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    Subscribers
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4 mb-4">
              <h5>Connect With Us</h5>
              <div className="d-flex gap-3 mt-3">
                <a href="#" className="text-white social-icon">
                  <i className="fab fa-facebook-f fa-lg"></i>
                </a>
                <a href="#" className="text-white social-icon">
                  <i className="fab fa-twitter fa-lg"></i>
                </a>
                <a href="#" className="text-white social-icon">
                  <i className="fab fa-instagram fa-lg"></i>
                </a>
                <a href="#" className="text-white social-icon">
                  <i className="fab fa-linkedin-in fa-lg"></i>
                </a>
              </div>
              <div className="mt-4">
                <h5>Get Admin Notifications</h5>
                <div className="input-group mt-2">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your email"
                  />
                  <button className="btn btn-warning" type="button">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
          <hr className="bg-light" />
          <div className="text-center py-3">
            <p className="mb-0">
              © 2023 Bhaktapur Multiple Campus. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Helper function to determine role color
const getRoleColor = (role) => {
  switch (role) {
    case "Admin":
      return "danger";
    case "Editor":
      return "info";
    case "Author":
      return "success";
    case "Subscriber":
      return "secondary";
    default:
      return "primary";
  }
};

// Helper function to format date
const formatDate = (dateString) => {
  const options = { year: "numeric", month: "short", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

// Helper function to calculate days since
const daysSince = (dateString) => {
  const joinDate = new Date(dateString);
  const today = new Date();
  const diffTime = Math.abs(today - joinDate);
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};

export default UserManager;
