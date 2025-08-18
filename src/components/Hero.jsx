import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";
import '../css/Hero.css';

function Hero() {
  return (
    <section id="hero">
      <div
        id="carouselExample"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="2000"
      >
        <div className="carousel-inner">
          {/* Slide 1 */}
          <div className="carousel-item active">
            <img src="../images/C1.png" className="img-fluid d-block w-100" alt="Slide 1" />
            <div className="carousel-caption d-flex flex-column justify-content-center align-items-center text-center dm-serif-text-regular">
              <h1 className="display-1 fw-bold hero-title">FlexiRide</h1>
              <p className="sub">Your Ride, Your Way</p>
              <p className="lead sub2">Self-Drive or Chauffeur, You Choose.</p>
              <Link to="/book" className="btn btn-outline-light btn-lg mt-3">Book Now</Link>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item">
            <img src="../images/C2.png" className="img-fluid d-block w-100" alt="Slide 2" />
            <div className="carousel-caption d-flex flex-column justify-content-center align-items-center text-center dm-serif-text-regular">
              <h1 className="display-1 fw-bold hero-title">FlexiRide</h1>
              <p className="lead sub">Go Where You Feel Alive</p>
              <p className="lead sub2">Self-drive freedom that lets you explore at your own pace.</p>
              <Link to="/book" className="btn btn-outline-light btn-lg mt-3">Book Now</Link>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="carousel-item">
            <img src="../images/C3.png" className="img-fluid d-block w-100" alt="Slide 3" />
            <div className="carousel-caption d-flex flex-column justify-content-center align-items-center text-center dm-serif-text-regular">
              <h1 className="display-1 fw-bold hero-title">FlexiRide</h1>
              <p className="lead sub">Comfortable Rides, Anytime</p>
              <p className="lead sub2">Professional drivers for your comfort and convenience.</p>
              <Link to="/book" className="btn btn-outline-light btn-lg mt-3">Book Now</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
