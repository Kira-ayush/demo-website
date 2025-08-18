import { Link } from "react-router-dom";
import '../css/About.css';
function About() {
  return (
    <section id="about" className="py-5">
      <div className="container">
        {/* Section Heading */}
        <div className="text-center mb-5" data-aos="fade-in-right">
          <h1 className="fw-bold">About FlexiRide</h1>
          <p className="lead">
            Your trusted partner for self-drive and chauffeur-based vehicle rentals across India.
          </p>
        </div>

        {/* Row: Image + Intro */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6 mb-4 mb-md-0" data-aos="fade-in-left">
            <img src="../images/About.png" className="img-fluid rounded shadow" alt="About FlexiRide" />
          </div>
          <div className="col-md-6" data-aos="fade-in-left">
            <h3>Who We Are</h3>
            <p>
              FlexiRide is a next-generation vehicle rental service offering complete flexibility. Whether you're a daily
              commuter, a weekend explorer, or a traveler needing a chauffeur, we've got the right vehicle for you.
            </p>
            <h4 className="mt-4">Why Choose Us?</h4>
            <ul className="list-unstyled">
              <li>✅ Diverse fleet of vehicles</li>
              <li>✅ Affordable and transparent pricing</li>
              <li>✅ 24/7 support and booking flexibility</li>
              <li>✅ Trusted by thousands of happy riders</li>
            </ul>
          </div>
        </div>

        {/* Row: Mission, Vision, Values */}
        <div className="row text-center" data-aos="zoom-in">
          <div className="col-md-4 mb-4">
            <div className="about-box p-4 rounded shadow-sm h-100 text-center">
              <h5 className="fw-bold">🚀 Our Mission</h5>
              <p>To empower users with easy, affordable, and flexible transportation — anywhere, anytime.</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="about-box p-4 rounded shadow-sm h-100 text-center">
              <h5 className="fw-bold">🌍 Our Vision</h5>
              <p>To be India’s most trusted and loved mobility partner, redefining how people move.</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="about-box p-4 rounded shadow-sm h-100 text-center">
              <h5 className="fw-bold">💡 Core Values</h5>
              <p>Customer-first service, safety, transparency, innovation, and a love for the road.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-4">
          <Link to="/book" className="btn btn-primary btn-lg">Start Your Ride Now</Link>
        </div>
      </div>
    </section>
  );
}

export default About;
