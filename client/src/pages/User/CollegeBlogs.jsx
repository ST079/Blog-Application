import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/CollegeBlogs.css";

const CollegeBlogs = () => {
  const [activeTab, setActiveTab] = useState("all");

  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "New Online Fee Payment System Launched",
      excerpt:
        "Our college has implemented a new online payment system for tuition fees and other expenses.",
      category: "Announcements",
      date: "May 20, 2023",
      author: "Finance Department",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      comments: 12,
      likes: 34,
    },
    {
      id: 2,
      title: "Annual Science Fair 2023 - Winners Announced",
      excerpt:
        "The results of our annual science fair are out. Congratulations to all participants and winners!",
      category: "Events",
      date: "May 18, 2023",
      author: "Science Department",
      image:
        "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      comments: 8,
      likes: 45,
    },
    {
      id: 3,
      title: "Summer Vacation Schedule",
      excerpt:
        "Important information regarding the summer break schedule and college reopening dates.",
      category: "Academics",
      date: "May 15, 2023",
      author: "Administration",
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      comments: 15,
      likes: 29,
    },
    {
      id: 4,
      title: "New Computer Lab Facilities",
      excerpt:
        "Our college has upgraded the computer lab with new systems and software for enhanced learning.",
      category: "Facilities",
      date: "May 12, 2023",
      author: "IT Department",
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      comments: 6,
      likes: 38,
    },
  ];

  // Filter posts based on active tab
  const filteredPosts =
    activeTab === "all"
      ? blogPosts
      : blogPosts.filter((post) => post.category.toLowerCase() === activeTab);

  return (
    <div className="college-blog">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center min-vh-75">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4">
                Welcome to BMC College Blog
              </h1>
              <p className="lead mb-4">
                Stay updated with the latest news, events, and announcements
                from Bhaktapur Multiple Campus
              </p>
              <div className="d-flex flex-wrap gap-2">
                <button className="btn btn-primary btn-lg">
                  Explore Programs
                </button>
                <button className="btn btn-outline-light btn-lg">
                  Campus Tour
                </button>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-image">
                <img
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="College Campus"
                  className="img-fluid rounded shadow"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* College Introduction */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                alt="College Building"
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="fw-bold mb-4">About Bhaktapur Multiple Campus</h2>
              <p className="mb-4">
                Established in 1975, Bhaktapur Multiple Campus is one of the
                leading educational institutions in Nepal, offering quality
                education in various disciplines.
              </p>
              <p className="mb-4">
                We are committed to providing our students with a holistic
                learning experience that combines academic excellence with
                personal development.
              </p>
              <div className="row text-center">
                <div className="col-4">
                  <h3 className="fw-bold text-primary">5000+</h3>
                  <p>Students</p>
                </div>
                <div className="col-4">
                  <h3 className="fw-bold text-primary">250+</h3>
                  <p>Faculty</p>
                </div>
                <div className="col-4">
                  <h3 className="fw-bold text-primary">15+</h3>
                  <p>Programs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Latest Blog Posts</h2>
            <p className="text-muted">
              Stay updated with campus news and events
            </p>
          </div>

          {/* Category Filters */}
          <div className="d-flex justify-content-center flex-wrap mb-5">
            <button
              className={`btn ${
                activeTab === "all" ? "btn-primary" : "btn-outline-primary"
              } rounded-pill mx-2 mb-2`}
              onClick={() => setActiveTab("all")}
            >
              All Posts
            </button>
            <button
              className={`btn ${
                activeTab === "announcements"
                  ? "btn-primary"
                  : "btn-outline-primary"
              } rounded-pill mx-2 mb-2`}
              onClick={() => setActiveTab("announcements")}
            >
              Announcements
            </button>
            <button
              className={`btn ${
                activeTab === "events" ? "btn-primary" : "btn-outline-primary"
              } rounded-pill mx-2 mb-2`}
              onClick={() => setActiveTab("events")}
            >
              Events
            </button>
            <button
              className={`btn ${
                activeTab === "academics"
                  ? "btn-primary"
                  : "btn-outline-primary"
              } rounded-pill mx-2 mb-2`}
              onClick={() => setActiveTab("academics")}
            >
              Academics
            </button>
            <button
              className={`btn ${
                activeTab === "facilities"
                  ? "btn-primary"
                  : "btn-outline-primary"
              } rounded-pill mx-2 mb-2`}
              onClick={() => setActiveTab("facilities")}
            >
              Facilities
            </button>
          </div>

          {/* Blog Posts Grid */}
          <div className="row">
            {filteredPosts.map((post) => (
              <div key={post.id} className="col-lg-6 mb-4">
                <div className="card blog-card h-100">
                  <div className="row g-0 h-100">
                    <div className="col-md-5">
                      <img
                        src={post.image}
                        className="img-fluid rounded-start h-100 object-cover"
                        alt={post.title}
                      />
                    </div>
                    <div className="col-md-7">
                      <div className="card-body d-flex flex-column h-100">
                        <span className="badge bg-primary mb-2">
                          {post.category}
                        </span>
                        <h5 className="card-title">{post.title}</h5>
                        <p className="card-text flex-grow-1">{post.excerpt}</p>
                        <div className="d-flex justify-content-between align-items-center mt-auto">
                          <small className="text-muted">
                            {post.date} • By {post.author}
                          </small>
                          <div className="d-flex">
                            <button className="btn btn-sm btn-outline-secondary me-2">
                              <i className="far fa-comment me-1"></i>{" "}
                              {post.comments}
                            </button>
                            <button className="btn btn-sm btn-outline-danger">
                              <i className="far fa-heart me-1"></i> {post.likes}
                            </button>
                          </div>
                        </div>
                        <div className="mt-3">
                          <button className="btn btn-sm btn-outline-primary me-2">
                            Read More
                          </button>
                          <button className="btn btn-sm btn-outline-secondary">
                            Leave a Comment
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-4">
            <button className="btn btn-primary">View All Posts</button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">What Our Students Say</h2>
            <p className="text-muted">
              Hear from our students about their experience at BMC
            </p>
          </div>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card testimonial-card h-100">
                <div className="card-body text-center">
                  <img
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt="Student"
                    className="rounded-circle mb-3"
                    width="80"
                    height="80"
                  />
                  <h5 className="card-title">Sita Gurung</h5>
                  <p className="text-muted">Computer Science Student</p>
                  <p className="card-text">
                    "The faculty at BMC is exceptional. They're always available
                    to help and provide guidance both academically and
                    personally."
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card testimonial-card h-100">
                <div className="card-body text-center">
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="Student"
                    className="rounded-circle mb-3"
                    width="80"
                    height="80"
                  />
                  <h5 className="card-title">Rajesh Sharma</h5>
                  <p className="text-muted">Business Administration Student</p>
                  <p className="card-text">
                    "The campus facilities are top-notch. I especially love the
                    library and the computer labs which are always available for
                    students."
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card testimonial-card h-100">
                <div className="card-body text-center">
                  <img
                    src="https://randomuser.me/api/portraits/women/68.jpg"
                    alt="Student"
                    className="rounded-circle mb-3"
                    width="80"
                    height="80"
                  />
                  <h5 className="card-title">Priya Singh</h5>
                  <p className="text-muted">Arts Student</p>
                  <p className="card-text">
                    "BMC provides a perfect balance of academic rigor and
                    extracurricular activities. I've grown so much during my
                    time here."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-5 cta-section">
        <div className="container text-center py-5">
          <h2 className="fw-bold mb-3">Stay Connected with BMC</h2>
          <p className="lead mb-4">
            Subscribe to our newsletter to receive updates on college events,
            news, and blog posts
          </p>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control form-control-lg"
                  placeholder="Your email address"
                />
                <button className="btn btn-primary btn-lg" type="button">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer bg-dark text-white py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-4">
              <h5>BMC College Blog</h5>
              <p>Bhaktapur Multiple Campus</p>
              <p>Dudpati, Bhaktapur, Nepal</p>
              <p>Email: info@bmc.edu.np</p>
              <p>Phone: +977 1-6612345</p>
            </div>
            <div className="col-lg-2 mb-4">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    Programs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    Admissions
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 mb-4">
              <h5>Blog Categories</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    Announcements
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    Events
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    Academics
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    Facilities
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 mb-4">
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
                <p>© 2023 Bhaktapur Multiple Campus. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CollegeBlogs;
