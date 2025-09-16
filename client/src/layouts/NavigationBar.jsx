import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const NavigationBar = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  return (
    <div>
      {/* Header */}
      <header className="blog-header">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h1 className="blog-title">BlogSpace</h1>
              <p className="blog-tagline">Discover. Learn. Grow.</p>
            </Col>
            <Col md={6} className="text-end">
              <nav className="blog-nav">
                <a href="#home">Home</a>
                <a href="#categories">Categories</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
                <div>
                  <button
                    type="button"
                    class="btn btn-outline-primary me-2"
                    onClick={() => setShowLoginModal(true)}
                  >
                    Login
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary"
                    onClick={() => setShowSignupModal(true)}
                  >
                    Sign-up
                  </button>
                </div>
              </nav>
            </Col>
          </Row>
        </Container>
      </header>

      {/* Login Modal */}
      {showLoginModal && (
        <div className="modal fade show d-block" tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Login to Your Account</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowLoginModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email address
                    </label>
                    <input type="email" className="form-control" id="email" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                    />
                  </div>
                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="remember"
                    />
                    <label className="form-check-label" htmlFor="remember">
                      Remember me
                    </label>
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    Login
                  </button>
                </form>
                <div className="text-center mt-3">
                  <a href="#" className="text-decoration-none">
                    Forgot password?
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Signup Modal */}
      {showSignupModal && (
        <div className="modal fade show d-block" tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Create an Account</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowSignupModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="row mb-3">
                    <div className="col">
                      <label htmlFor="firstName" className="form-label">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="firstName"
                      />
                    </div>
                    <div className="col">
                      <label htmlFor="lastName" className="form-label">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="lastName"
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="signupEmail" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="signupEmail"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="signupPassword" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="signupPassword"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="confirmPassword"
                    />
                  </div>
                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="terms"
                    />
                    <label className="form-check-label" htmlFor="terms">
                      I agree to the Terms and Conditions
                    </label>
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    Sign Up
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavigationBar;
