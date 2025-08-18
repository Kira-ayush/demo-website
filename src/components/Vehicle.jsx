function Vehicle() {
  return (
    <section
      id="vehicle"
      className="py-5"
      style={{ backgroundColor: "#FAF1E6" }}
    >
      <div className="container text-center">
        {/* Heading */}
        <h2 className="fw-bold mb-4" data-aos="zoom-in-left">
          Our Vehicles
        </h2>
        <p className="lead text-muted mb-5" data-aos="zoom-in-left">
          Choose from our wide range of well-maintained cars and bikes for your
          perfect journey.
        </p>

        {/* Vehicles List */}
        <div className="row g-4" data-aos="zoom-in-right">
          {/* Vehicle 1 */}
          <div className="col-md-4">
            <div className="card shadow-sm h-100">
              <img
                src="/images/MarutiSwift_hatchback.png"
                className="card-img-top"
                alt="Hatchback"
              />
              <div className="card-body">
                <a href="/details/2" className="me-3 text-dark">
                  <h5 className="card-title">Maruti Swift</h5>
                </a>
                <p className="card-text">
                  Ideal for city rides with great mileage and easy handling.
                </p>
                <p className="text-muted">Starting at ₹499/day</p>
                <a
                  href="/book/2"
                  className="btn btn-outline-primary"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>

          {/* Vehicle 2 */}
          <div className="col-md-4">
            <div className="card shadow-sm h-100">
              <img
                src="/images/MarutiSuzuki_Sedan.png"
                className="card-img-top"
                alt="Sedan"
              />
              <div className="card-body">
                <a href="/details/7" className="me-3 text-dark">
                  <h5 className="card-title">Maruti Dzire</h5>
                </a>
                <p className="card-text">
                  Spacious and elegant, perfect for long-distance journeys.
                </p>
                <p className="text-muted">Starting at ₹899/day</p>
                <a
                  href="/book/7"
                  className="btn btn-outline-primary"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>

          {/* Vehicle 3 */}
          <div className="col-md-4">
            <div className="card shadow-sm h-100">
              <img
                src="/images/bullet.png"
                className="card-img-top"
                alt="Bike"
              />
              <div className="card-body">
                <a href="/details/31" className="me-3 text-dark">
                  <h5 className="card-title">Royal Enfield</h5>
                </a>
                <p className="card-text">
                  Powerful and rugged — great for highway trips and adventure
                  rides.
                </p>
                <p className="text-muted">Starting at ₹699/day</p>
                <a
                  href="/book/31"
                  className="btn btn-outline-primary"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-4">
          <a href="/Vehicles" className="btn btn-primary">
            View All Vehicles
          </a>
        </div>
      </div>
    </section>
  );
}

export default Vehicle;
