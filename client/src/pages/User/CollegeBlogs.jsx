import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Carousel,
  Badge,
} from "react-bootstrap";
import {
  FaCalendarAlt,
  FaUser,
  FaArrowRight,
  FaBookmark,
  FaShare,
} from "react-icons/fa";
import "../../styles/CollegeBlogs.css";

const CollegeBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [featuredBlogs, setFeaturedBlogs] = useState([]);

  useEffect(() => {
    // Simulate fetching blog data
    const fetchedBlogs = [
      {
        id: 1,
        title: "The Future of Web Development in 2023",
        excerpt:
          "Explore the latest trends and technologies shaping the future of web development this year.",
        image:
          "https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "Technology",
        author: "Sarah Johnson",
        date: "May 15, 2023",
        readTime: "5 min read",
      },
      {
        id: 2,
        title: "10 Tips for Healthy Remote Work Lifestyle",
        excerpt:
          "Maintaining a healthy work-life balance while working remotely can be challenging. Here are 10 tips to help you.",
        image:
          "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "Lifestyle",
        author: "Michael Chen",
        date: "May 12, 2023",
        readTime: "7 min read",
      },
      {
        id: 3,
        title: "Sustainable Eating: A Beginner's Guide",
        excerpt:
          "How to make environmentally conscious food choices that benefit both your health and the planet.",
        image:
          "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "Food",
        author: "Emma Rodriguez",
        date: "May 10, 2023",
        readTime: "6 min read",
      },
      {
        id: 4,
        title: "The Psychology of Color in Marketing",
        excerpt:
          "How different colors influence consumer behavior and what it means for your brand strategy.",
        image:
          "https://images.unsplash.com/photo-1566206091558-7f218b696731?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "Marketing",
        author: "David Wilson",
        date: "May 8, 2023",
        readTime: "8 min read",
      },
      {
        id: 5,
        title: "Minimalist Design Principles for Modern Homes",
        excerpt:
          "Creating peaceful, functional spaces using minimalist design principles and approaches.",
        image:
          "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "Design",
        author: "Lisa Thompson",
        date: "May 5, 2023",
        readTime: "9 min read",
      },
      {
        id: 6,
        title: "How to Build a Morning Routine That Works",
        excerpt:
          "Science-backed strategies for creating a morning routine that sets you up for a productive day.",
        image:
          "https://images.unsplash.com/photo-1544816155-12df9643f363?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "Productivity",
        author: "James Parker",
        date: "May 3, 2023",
        readTime: "5 min read",
      },
    ];

    const fetchedFeaturedBlogs = [
      {
        id: 7,
        title: "Artificial Intelligence: The Next Revolution",
        excerpt:
          "How AI is transforming industries and what it means for the future of work and society.",
        image:
          "https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?q=80&w=696&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "Technology",
      },
      {
        id: 8,
        title: "The Science of Happiness",
        excerpt:
          "Research-backed practices to increase your happiness and overall well-being.",
        image:
          "https://images.unsplash.com/photo-1529255484355-cb73c33c04bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "Psychology",
      },
      {
        id: 9,
        title: "Sustainable Travel: Exploring Responsibly",
        excerpt:
          "How to see the world while minimizing your environmental impact and supporting local communities.",
        image:
          "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "Travel",
      },
    ];

    setBlogs(fetchedBlogs);
    setFeaturedBlogs(fetchedFeaturedBlogs);
  }, []);

  const categories = [
    "Technology",
    "Design",
    "Lifestyle",
    "Business",
    "Health",
    "Travel",
    "Food",
  ];

  return (
    <div className="blog-homepage">
      {/* Banner */}
      <section className="banner-section">
        <Container>
          <Row>
            <Col lg={7}>
              <div className="banner-content px-3">
                <Badge bg="primary" className="banner-badge">
                  Featured Article
                </Badge>
                <h1>The Future of Digital Innovation</h1>
                <p>
                  Exploring how emerging technologies are reshaping industries
                  and creating new opportunities for businesses and individuals
                  alike in our rapidly evolving digital landscape.
                </p>
                <Button variant="primary" size="lg" className=" d-flex align-items-center justify-content-center">
                  Read More <FaArrowRight className="ms-2" />
                </Button>
              </div>
            </Col>
            <Col lg={4}>
              <div className="banner-subscribe">
                <h3>Stay Updated</h3>
                <p>Get the latest articles delivered to your inbox</p>
                <div className="subscribe-form">
                  <input type="email" placeholder="Your email address" />
                  <Button variant="primary">Subscribe</Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Featured Blogs Carousel */}
      <section className="featured-blogs">
        <Container>
          <h2 className="section-title">Featured Stories</h2>
          <Carousel indicators={false} className="featured-carousel">
            {featuredBlogs.map((blog) => (
              <Carousel.Item key={blog.id}>
                <Row>
                  <Col md={6}>
                    <img
                      className="d-block w-100"
                      src={blog.image}
                      alt={blog.title}
                    />
                  </Col>
                  <Col md={6} className="featured-content">
                    <Badge bg="secondary" className="category-badge">
                      {blog.category}
                    </Badge>
                    <h3>{blog.title}</h3>
                    <p>{blog.excerpt}</p>
                    <Button variant="outline-primary">Read Story</Button>
                  </Col>
                </Row>
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
      </section>

      {/* Main Content */}
      <Container className="blog-content">
        <Row>
          {/* Blog Posts */}
          <Col lg={8}>
            <div className="section-header">
              <h2 className="section-title">Latest Articles</h2>
              <div className="view-options">
                <span>Sort by: </span>
                <select>
                  <option>Latest</option>
                  <option>Popular</option>
                </select>
              </div>
            </div>

            <Row>
              {blogs.map((blog) => (
                <Col md={6} key={blog.id} className="mb-4">
                  <Card className="blog-card">
                    <div className="card-image-container">
                      <Card.Img variant="top" src={blog.image} />
                      <Badge bg="primary" className="card-category">
                        {blog.category}
                      </Badge>
                      <Button variant="light" className="card-bookmark">
                        <FaBookmark />
                      </Button>
                    </div>
                    <Card.Body>
                      <Card.Title>{blog.title}</Card.Title>
                      <Card.Text>{blog.excerpt}</Card.Text>
                      <div className="card-meta">
                        <div className="author-info">
                          <FaUser className="me-1" />
                          <span>{blog.author}</span>
                        </div>
                        <div className="date-info">
                          <FaCalendarAlt className="me-1" />
                          <span>{blog.date}</span>
                        </div>
                        <span>{blog.readTime}</span>
                      </div>
                    </Card.Body>
                    <Card.Footer>
                      <Button variant="outline-primary" size="sm">
                        Read More
                      </Button>
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        className="ms-2"
                      >
                        <FaShare />
                      </Button>
                    </Card.Footer>
                  </Card>
                </Col>
              ))}
            </Row>

            <div className="text-center mt-2">
              <Button variant="primary">
                Read More Blogs
              </Button>
            </div>
          </Col>

          {/* Sidebar */}
          <Col lg={4}>
            {/* Categories */}
            <Card className="sidebar-widget mb-4">
              <Card.Header>
                <h3>Categories</h3>
              </Card.Header>
              <Card.Body>
                <ul className="categories-list">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <a href={`#${category.toLowerCase()}`}>
                        {category} <span>({(index + 1) * 12})</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </Card.Body>
            </Card>

            {/* Ad Space */}
            <Card className="sidebar-widget mb-4 ad-space">
              <Card.Body className="text-center">
                <h5>Advertisement</h5>
                <div className="ad-container">
                  <p>Premium Hosting Solution</p>
                  <small>Up to 50% off this month</small>
                  <Button variant="outline-primary" size="sm" className="mt-2">
                    Learn More
                  </Button>
                </div>
              </Card.Body>
            </Card>

            {/* Popular Posts */}
            <Card className="sidebar-widget mb-4">
              <Card.Header>
                <h3>Popular Posts</h3>
              </Card.Header>
              <Card.Body>
                {blogs.slice(0, 3).map((blog) => (
                  <div key={blog.id} className="popular-post">
                    <img src={blog.image} alt={blog.title} />
                    <div className="post-content">
                      <h6>{blog.title}</h6>
                      <span>{blog.date}</span>
                    </div>
                  </div>
                ))}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

    </div>
  );
};

export default CollegeBlogs;
