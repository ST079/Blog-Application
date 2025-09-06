import React from 'react'

const Dashboard = () => {
      const statsData = {
        totalPosts: 156,
        publishedPosts: 128,
        pendingReviews: 12,
        totalUsers: 48,
        newComments: 23,
        pageViews: 2456,
      };

      // Recent activities data
      const recentActivities = [
        {
          user: "Rajesh Sharma",
          action: "published a new post",
          time: "2 hours ago",
        },
        {
          user: "Sita Gurung",
          action: "submitted a post for review",
          time: "5 hours ago",
        },
        {
          user: "Amit Patel",
          action: "commented on 'Exam Schedule'",
          time: "Yesterday",
        },
        {
          user: "Priya Singh",
          action: "updated her profile",
          time: "2 days ago",
        },
      ];

      // Recent posts data
      const recentPosts = [
        {
          title: "New Online Fee Payment System",
          author: "Rajesh Sharma",
          date: "2023-05-20",
          status: "Published",
        },
        {
          title: "Final Exam Schedule for Spring 2023",
          author: "Admin",
          date: "2023-05-18",
          status: "Published",
        },
        {
          title: "Guidelines for Physics Lab Submissions",
          author: "Sita Gurung",
          date: "2023-05-15",
          status: "Pending Review",
        },
      ];
  return (
    <div>
      <div>
        {/* Dashboard Content */}
          <div className="dashboard-content">
            <div className="page-header">
              <h4>Dashboard Overview</h4>
              <p>Welcome to BMC Blog Management System</p>
            </div>

            {/* Stats Cards */}
            <div className="row stats-row">
              <div className="col-md-4 col-sm-6 mb-4">
                <div className="stats-card">
                  <div className="stats-icon bg-primary">
                    <i className="fas fa-file-alt"></i>
                  </div>
                  <div className="stats-info">
                    <h3>{statsData.totalPosts}</h3>
                    <p>Total Posts</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 mb-4">
                <div className="stats-card">
                  <div className="stats-icon bg-success">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <div className="stats-info">
                    <h3>{statsData.publishedPosts}</h3>
                    <p>Published Posts</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 mb-4">
                <div className="stats-card">
                  <div className="stats-icon bg-warning">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div className="stats-info">
                    <h3>{statsData.pendingReviews}</h3>
                    <p>Pending Reviews</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 mb-4">
                <div className="stats-card">
                  <div className="stats-icon bg-info">
                    <i className="fas fa-users"></i>
                  </div>
                  <div className="stats-info">
                    <h3>{statsData.totalUsers}</h3>
                    <p>Total Users</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 mb-4">
                <div className="stats-card">
                  <div className="stats-icon bg-secondary">
                    <i className="fas fa-comments"></i>
                  </div>
                  <div className="stats-info">
                    <h3>{statsData.newComments}</h3>
                    <p>New Comments</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 mb-4">
                <div className="stats-card">
                  <div className="stats-icon bg-danger">
                    <i className="fas fa-eye"></i>
                  </div>
                  <div className="stats-info">
                    <h3>{statsData.pageViews}</h3>
                    <p>Page Views</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activities and Posts */}
            <div className="row">
              <div className="col-lg-6 mb-4">
                <div className="card">
                  <div className="card-header">
                    <h5>Recent Activities</h5>
                  </div>
                  <div className="card-body">
                    <ul className="activity-list">
                      {recentActivities.map((activity, index) => (
                        <li key={index} className="activity-item">
                          <div className="activity-icon">
                            <i className="fas fa-bell"></i>
                          </div>
                          <div className="activity-content">
                            <p>
                              <strong>{activity.user}</strong> {activity.action}
                            </p>
                            <small className="text-muted">
                              {activity.time}
                            </small>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 mb-4">
                <div className="card">
                  <div className="card-header">
                    <h5>Recent Posts</h5>
                  </div>
                  <div className="card-body">
                    <div className="post-list">
                      {recentPosts.map((post, index) => (
                        <div key={index} className="post-item">
                          <h6>{post.title}</h6>
                          <div className="d-flex justify-content-between">
                            <small className="text-muted">
                              By {post.author}
                            </small>
                            <small className="text-muted">{post.date}</small>
                          </div>
                          <div className="d-flex justify-content-between align-items-center mt-2">
                            <span
                              className={`badge bg-${
                                post.status === "Published"
                                  ? "success"
                                  : "warning"
                              }`}
                            >
                              {post.status}
                            </span>
                            <div className="post-actions">
                              <button className="btn btn-sm btn-outline-primary">
                                Edit
                              </button>
                              <button className="btn btn-sm btn-outline-secondary ms-1">
                                View
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h5>Quick Actions</h5>
                  </div>
                  <div className="card-body">
                    <div className="d-flex flex-wrap gap-2">
                      <button className="btn btn-campus">
                        <i className="fas fa-plus me-2"></i>Add New Post
                      </button>
                      <button className="btn btn-outline-campus">
                        <i className="fas fa-user-plus me-2"></i>Add New User
                      </button>
                      <button className="btn btn-outline-campus">
                        <i className="fas fa-folder-plus me-2"></i>Add Category
                      </button>
                      <button className="btn btn-outline-campus">
                        <i className="fas fa-cog me-2"></i>Settings
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Dashboard