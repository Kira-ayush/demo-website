function Pricing() {
  return (
    <section
      id="pricing"
      className="py-5"
      style={{ backgroundColor: "#FDFAF6" }}
    >
      <div className="container text-center">
        {/* Section Heading */}
        <h2 className="fw-bold mb-4" data-aos="fade-down">
          Our Pricing Plans
        </h2>
        <p className="lead text-muted mb-5" data-aos="fade-down">
          Flexible rental options for two-wheelers and four-wheelers to suit
          every journey.
        </p>

        {/* Two-Wheelers */}
        <h4 className="mb-4" data-aos="fade-down">
          Two-Wheeler Plans
        </h4>
        <div className="row g-4 mb-5">
          {/* Plan 1 */}
          <div className="col-md-4" data-aos="fade-left">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Basic Ride</h5>
                <p className="text-muted">Perfect for short trips.</p>
                <h6 className="fw-bold mb-3">₹399 / Day</h6>
                <ul className="list-unstyled mb-4">
                  <li>✅ 100 km limit</li>
                  <li>✅ Helmet included</li>
                  <li>❌ Roadside Assistance</li>
                </ul>
                <a
                  href="/our_vehicles?search=&category=bike&subcategory=basic"
                  className="btn btn-outline-primary"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>

          {/* Plan 2 */}
          <div className="col-md-4" data-aos="fade-left" data-aos-delay="100">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Standard Ride</h5>
                <p className="text-muted">Ideal for day-long city exploration.</p>
                <h6 className="fw-bold mb-3">₹499 / Day</h6>
                <ul className="list-unstyled mb-4">
                  <li>✅ 200 km limit</li>
                  <li>✅ Helmet & Phone mount</li>
                  <li>✅ Roadside Assistance</li>
                </ul>
                <a
                  href="/our_vehicles?search=&category=bike&subcategory=standard"
                  className="btn btn-outline-primary"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>

          {/* Plan 3 */}
          <div className="col-md-4" data-aos="fade-left" data-aos-delay="200">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Adventure Ride</h5>
                <p className="text-muted">Long trips and tours.</p>
                <h6 className="fw-bold mb-3">₹699 / Day</h6>
                <ul className="list-unstyled mb-4">
                  <li>✅ Unlimited km</li>
                  <li>✅ Dual helmets</li>
                  <li>✅ Roadside + Trip Support</li>
                </ul>
                <a
                  href="/our_vehicles?search=&category=bike&subcategory=adventurous"
                  className="btn btn-outline-primary"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Four-Wheelers */}
        <h4 className="mb-4" data-aos="fade-down">
          Four-Wheeler Plans
        </h4>
        <div className="row g-4">
          {/* Plan 1 */}
          <div className="col-md-4" data-aos="fade-right">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">City Compact</h5>
                <p className="text-muted">Best for local commutes.</p>
                <h6 className="fw-bold mb-3">₹999 / Day</h6>
                <ul className="list-unstyled mb-4">
                  <li>✅ 150 km limit</li>
                  <li>✅ AC Hatchback options</li>
                </ul>
                <a
                  href="/our_vehicles?search=&category=car&subcategory=hatchback"
                  className="btn btn-outline-primary"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>

          {/* Plan 2 */}
          <div className="col-md-4" data-aos="fade-right" data-aos-delay="100">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Comfort Drive</h5>
                <p className="text-muted">Family trips made easy.</p>
                <h6 className="fw-bold mb-3">₹1499 / Day</h6>
                <ul className="list-unstyled mb-4">
                  <li>✅ 250 km limit</li>
                  <li>✅ Sedan options</li>
                  <li>✅ Roadside Support</li>
                </ul>
                <a
                  href="/our_vehicles?search=&category=car&subcategory=sedan"
                  className="btn btn-outline-primary"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>

          {/* Plan 3 */}
          <div className="col-md-4" data-aos="fade-right" data-aos-delay="200">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Luxury Chauffeur</h5>
                <p className="text-muted">Corporate or special events.</p>
                <h6 className="fw-bold mb-3">₹2299 / Day</h6>
                <ul className="list-unstyled mb-4">
                  <li>✅ Unlimited km</li>
                  <li>✅ SUV options</li>
                  <li>✅ Premium AC</li>
                  <li>✅ Full Insurance</li>
                </ul>
                <a
                  href="/our_vehicles?search=&category=car&subcategory=suv"
                  className="btn btn-outline-primary"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
