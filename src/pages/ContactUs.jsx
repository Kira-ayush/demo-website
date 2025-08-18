import React, { useState } from "react";
import '../css/Contact.css';
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // 👉 Here you would send formData to backend API or email service
  };

  return (
    <section
      id="contact"
      className="py-5"
      style={{ backgroundColor: "#FDFAF6" }}
      data-aos="flip-up"
    >
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="fw-bold">Contact Us</h2>
          <p className="lead">
            We're here to help. Reach out to us for inquiries, support, or
            partnership opportunities.
          </p>
        </div>

        <div className="row">
          {/* Contact Form */}
          <div className="col-md-7 mb-4">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label fw-semibold">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-semibold">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label fw-semibold">
                  Message
                </label>
                <textarea
                  name="message"
                  className="form-control"
                  id="message"
                  rows="5"
                  placeholder="Type your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary px-4">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="col-md-5">
            <h5 className="fw-bold mb-3">Get in Touch</h5>
            <p>
              <i className="fas fa-map-marker-alt me-2 text-primary"></i> Ranchi,
              Jharkhand, India
            </p>
            <p>
              <i className="fas fa-envelope me-2 text-danger"></i>{" "}
              support@flexiride.com
            </p>
            <p>
              <i className="fas fa-phone me-2 text-success"></i> +91 98765 43210
            </p>
            <p>
              <i className="fas fa-clock me-2 text-warning"></i> Mon - Sat: 9:00
              AM - 6:00 PM
            </p>

            <div className="mt-4">
              <a href="#" className="me-3 text-dark">
                <i className="fab fa-facebook fa-lg"></i>
              </a>
              <a href="#" className="me-3 text-dark">
                <i className="fab fa-twitter fa-lg"></i>
              </a>
              <a href="#" className="me-3 text-dark">
                <i className="fab fa-instagram fa-lg"></i>
              </a>
              <a href="#" className="me-3 text-dark">
                <i className="fab fa-linkedin fa-lg"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
