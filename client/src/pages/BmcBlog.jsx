import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

const BmcBlog = () => {
  const [recentPosts, setRecentPosts] = useState([
    {
      id: 1,
      title: "New Online Fee Payment System",
      category: "Fee Payment",
      excerpt:
        "Learn how to use the new online portal for fee payments with our step-by-step guide.",
      image:
        "https://images.unsplash.com/photo-1582573618381-c9a77c31f6b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      date: "2 days ago",
    },
    {
      id: 2,
      title: "Final Exam Schedule for Spring 2023",
      category: "Exam Schedule",
      excerpt:
        "The complete schedule for final examinations has been published. Check your dates now.",
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      date: "5 days ago",
    },
    {
      id: 3,
      title: "Guidelines for Physics Lab Submissions",
      category: "Lab Reports",
      excerpt:
        "Important guidelines and format requirements for submitting your physics lab reports.",
      image:
        "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      date: "1 week ago",
    },
  ]);

  const [popularTopics, setPopularTopics] = useState([
    "Fee Payment",
    "Exam Schedule",
    "Lab Reports",
    "Scholarships",
    "Library Resources",
    "Course Registration",
    "Hostel Facilities",
    "Academic Calendar",
  ]);

  return (
    <div className="App">
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-white py-3 nav-shadow">
        <div className="container">
          <a className="navbar-brand" href="#">
            <span className="fs-3 fw-bold text-primary">BMC</span>
            <span className="fs-6 text-dark">Blog System</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link text-dark active" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">
                  Blogs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">
                  Categories
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">
                  Contact
                </a>
              </li>
              <li className="nav-item ms-2">
                <a className="btn btn-campus" href="#">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container text-center">
          <h1 className="display-4 fw-bold mb-4">BMC Student Blog Portal</h1>
          <p className="lead mb-4">
            Your centralized platform for academic resources, administrative
            guidance, and campus updates
          </p>
          <div className="d-flex justify-content-center flex-wrap gap-3">
            <a href="#" className="btn btn-lg btn-warning px-4 py-2 fw-bold">
              Explore Blogs
            </a>
            <a
              href="#"
              className="btn btn-lg btn-outline-light px-4 py-2 fw-bold"
            >
              Submit Question
            </a>
          </div>
        </div>
      </section>

      {/* Featured Topics */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold">Popular Topics</h2>
          <div className="d-flex flex-wrap justify-content-center">
            {popularTopics.map((topic, index) => (
              <span key={index} className="topic-badge bg-primary">
                {topic}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold">
            How Our Blog System Helps You
          </h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card feature-card h-100">
                <div className="card-body text-center p-4">
                  <div className="bg-primary rounded-circle d-inline-flex p-3 mb-3">
                    <i className="fas fa-search fa-2x text-white"></i>
                  </div>
                  <h4 className="card-title">Find Solutions Quickly</h4>
                  <p className="card-text">
                    Search and find answers to common academic and
                    administrative questions in one place.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card feature-card h-100">
                <div className="card-body text-center p-4">
                  <div className="bg-success rounded-circle d-inline-flex p-3 mb-3">
                    <i className="fas fa-comments fa-2x text-white"></i>
                  </div>
                  <h4 className="card-title">Interactive Discussions</h4>
                  <p className="card-text">
                    Engage with other students and administrators through
                    comments and questions.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card feature-card h-100">
                <div className="card-body text-center p-4">
                  <div className="bg-warning rounded-circle d-inline-flex p-3 mb-3">
                    <i className="fas fa-book-open fa-2x text-white"></i>
                  </div>
                  <h4 className="card-title">Organized Resources</h4>
                  <p className="card-text">
                    All blog posts are categorized by topics for easy navigation
                    and discovery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold">Recent Blog Posts</h2>
          <div className="row g-4">
            {recentPosts.map((post) => (
              <div key={post.id} className="col-md-6 col-lg-4">
                <div className="card h-100">
                  <img
                    src={post.image}
                    className="card-img-top"
                    alt={post.title}
                  />
                  <div className="card-body">
                    <span
                      className={`badge bg-${getBadgeColor(
                        post.category
                      )} mb-2`}
                    >
                      {post.category}
                    </span>
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{post.excerpt}</p>
                    <a href="#" className="btn btn-sm btn-outline-primary">
                      Read More
                    </a>
                  </div>
                  <div className="card-footer bg-white">
                    <small className="text-muted">
                      <i className="far fa-clock me-1"></i> Posted {post.date}
                    </small>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <a href="#" className="btn btn-campus">
              View All Posts
            </a>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-5 cta-section">
        <div className="container text-center py-4">
          <h2 className="fw-bold mb-3">Have Questions About Campus Life?</h2>
          <p className="lead mb-4">
            Our blog system is designed to help you navigate academic and
            administrative challenges
          </p>
          <div className="d-flex justify-content-center flex-wrap gap-3">
            <a
              href="#"
              className="btn btn-lg btn-light text-primary px-4 py-2 fw-bold"
            >
              Browse Topics
            </a>
            <a
              href="#"
              className="btn btn-lg btn-outline-light px-4 py-2 fw-bold"
            >
              Ask a Question
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-4">
              <h4>BMC Blog System</h4>
              <p>Bhaktapur Multiple Campus</p>
              <p>Dudpati, Bhaktapur, Nepal</p>
              <p>Email: info@bmc.edu.np</p>
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
                    Blogs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    Categories
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    About
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-2 mb-4">
              <h5>Topics</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    Academics
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    Administration
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    Exams
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    Resources
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4 mb-4">
              <h5>Connect With Us</h5>
              <div className="d-flex gap-3 mt-3">
                <a href="#" className="text-white">
                  <i className="fab fa-facebook-f fa-lg"></i>
                </a>
                <a href="#" className="text-white">
                  <i className="fab fa-twitter fa-lg"></i>
                </a>
                <a href="#" className="text-white">
                  <i className="fab fa-instagram fa-lg"></i>
                </a>
                <a href="#" className="text-white">
                  <i className="fab fa-linkedin-in fa-lg"></i>
                </a>
                <a href="#" className="text-white">
                  <i className="fab fa-youtube fa-lg"></i>
                </a>
              </div>
              <div className="mt-4">
                <h5>Subscribe to Updates</h5>
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

// Helper function to determine badge color based on category
const getBadgeColor = (category) => {
  switch (category) {
    case "Fee Payment":
      return "primary";
    case "Exam Schedule":
      return "success";
    case "Lab Reports":
      return "info";
    default:
      return "primary";
  }
};

export default BmcBlog;
