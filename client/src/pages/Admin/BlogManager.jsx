import React, { useState, useEffect } from "react";
import "../../styles/BlogManager.css";

const BlogManager = () => {
  const [posts, setPosts] = useState([]);
  const [stats, setStats] = useState({
    totalPosts: 0,
    published: 0,
    drafts: 0,
    categories: 0,
  });

  // Sample data for demonstration
  useEffect(() => {
    const samplePosts = [
      {
        id: 1,
        title: "Getting Started with React",
        date: "2023-05-15",
        status: "Published",
        views: 1245,
        comments: 23,
      },
      {
        id: 2,
        title: "CSS Tips for Modern Websites",
        date: "2023-05-10",
        status: "Published",
        views: 876,
        comments: 15,
      },
      {
        id: 3,
        title: "JavaScript Best Practices",
        date: "2023-05-05",
        status: "Draft",
        views: 0,
        comments: 0,
      },
      {
        id: 4,
        title: "Building Responsive Layouts",
        date: "2023-04-28",
        status: "Published",
        views: 1532,
        comments: 31,
      },
      {
        id: 5,
        title: "Introduction to Node.js",
        date: "2023-04-20",
        status: "Draft",
        views: 0,
        comments: 0,
      },
    ];

    setPosts(samplePosts);
    setStats({
      totalPosts: samplePosts.length,
      published: samplePosts.filter((post) => post.status === "Published")
        .length,
      drafts: samplePosts.filter((post) => post.status === "Draft").length,
      categories: 5,
    });
  }, []);

  return (
    <div className="blog-manager">
      <header className="blog-header">
        <h1>Blog Manager</h1>
        <div className="user-info">
          <span>Hello, Admin</span>
          <div className="avatar">A</div>
        </div>
      </header>

      <div className="dashboard">
        <div className="stats-container">
          <div className="stat-card">
            <h3>Total Posts</h3>
            <p className="stat-number">{stats.totalPosts}</p>
          </div>
          <div className="stat-card">
            <h3>Published</h3>
            <p className="stat-number">{stats.published}</p>
          </div>
          <div className="stat-card">
            <h3>Drafts</h3>
            <p className="stat-number">{stats.drafts}</p>
          </div>
          <div className="stat-card">
            <h3>Categories</h3>
            <p className="stat-number">{stats.categories}</p>
          </div>
        </div>

        <div className="main-content">
          <div className="posts-section">
            <div className="section-header">
              <h2>Recent Posts</h2>
              <button className="btn-primary">New Post</button>
            </div>

            <div className="posts-table">
              <div className="table-header">
                <div className="col-title">Title</div>
                <div className="col-date">Date</div>
                <div className="col-status">Status</div>
                <div className="col-views">Views</div>
                <div className="col-comments">Comments</div>
                <div className="col-actions">Actions</div>
              </div>

              {posts.map((post) => (
                <div key={post.id} className="table-row">
                  <div className="col-title">{post.title}</div>
                  <div className="col-date">{post.date}</div>
                  <div className="col-status">
                    <span
                      className={`status-badge ${post.status.toLowerCase()}`}
                    >
                      {post.status}
                    </span>
                  </div>
                  <div className="col-views">{post.views}</div>
                  <div className="col-comments">{post.comments}</div>
                  <div className="col-actions">
                    <button className="btn-edit">Edit</button>
                    <button className="btn-delete">Delete</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="sidebar">
            <div className="sidebar-widget">
              <h3>Quick Actions</h3>
              <div className="action-buttons">
                <button className="btn-action">Write New Post</button>
                <button className="btn-action">Manage Categories</button>
                <button className="btn-action">View Comments</button>
                <button className="btn-action">Site Analytics</button>
              </div>
            </div>

            <div className="sidebar-widget">
              <h3>Activity Feed</h3>
              <div className="activity-list">
                <div className="activity-item">
                  <p>You published "Getting Started with React"</p>
                  <span className="activity-time">2 hours ago</span>
                </div>
                <div className="activity-item">
                  <p>John Doe commented on "CSS Tips for Modern Websites"</p>
                  <span className="activity-time">5 hours ago</span>
                </div>
                <div className="activity-item">
                  <p>You created a new draft "Introduction to Node.js"</p>
                  <span className="activity-time">Yesterday</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogManager;
