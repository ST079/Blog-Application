import React from 'react'
import {
  Container,
  Row,
  Col,
  Button,
} from "react-bootstrap";

const Footer = () => {
  return (
    <div>
      {/* Footer */}
      <footer className="blog-footer">
        <Container>
          <Row>
            <Col md={4}>
              <h5>BlogSpace</h5>
              <p>
                Discover amazing content and share your thoughts with our
                community of readers and writers.
              </p>
            </Col>
            <Col md={2}>
              <h6>Navigation</h6>
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#categories">Categories</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </Col>
            {/* <Col md={2}>
              <h6>Categories</h6>
              <ul>
                {categories.slice(0, 4).map((category, index) => (
                  <li key={index}>
                    <a href={`#${category}`}>{category}</a>
                  </li>
                ))}
              </ul>
            </Col> */}
            <Col md={4}>
              <h6>Subscribe</h6>
              <p>Stay updated with our latest articles</p>
              <div className="footer-subscribe">
                <input type="email" placeholder="Email address" />
                <Button variant="primary">Subscribe</Button>
              </div>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col md={6}>
              <p>&copy; 2023 BlogSpace. All rights reserved.</p>
            </Col>
            <Col md={6} className="text-end">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#cookies">Cookie Policy</a>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default Footer