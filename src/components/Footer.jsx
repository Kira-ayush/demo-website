import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-4 pb-3 py-5">
      <div className="container">
        <div className="row">
          {/* Brand Info */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">FlexiRide</h5>
            <p>
              Your ride, your way — across India. We offer reliable, affordable,
              and flexible self-drive and chauffeur-based vehicle rentals.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-bold">Quick Links</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#home" className="text-white text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-white text-decoration-none">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-white text-decoration-none">
                  Services
                </a>
              </li>
              <li>
                <a href="#team" className="text-white text-decoration-none">
                  Team
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-bold">Contact Us</h6>
            <p>
              <i className="fas fa-envelope me-2 text-warning"></i>{" "}
              support@flexiride.com
            </p>
            <p>
              <i className="fas fa-phone me-2 text-success"></i> +91 98765 43210
            </p>
            <div className="mt-3">
              <a href="#" className="text-white me-3">
                <i className="fab fa-facebook fa-lg"></i>
              </a>
              <a href="#" className="text-white me-3">
                <i className="fab fa-instagram fa-lg"></i>
              </a>
              <a href="#" className="text-white me-3">
                <i className="fab fa-twitter fa-lg"></i>
              </a>
              <a href="#" className="text-white me-3">
                <i className="fab fa-linkedin fa-lg"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="bg-secondary" />

        {/* Copyright */}
        <div className="text-center small">
          &copy; 2025 FlexiRide. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
