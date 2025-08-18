function Services() {
  return (
    <section id="services" className="py-5">
      <div className="container">
        {/* Section Heading */}
        <div className="text-center mb-5" data-aos="zoom-in-down">
          <h2 className="fw-bold">Our Services</h2>
          <p className="lead text-muted">
            FlexiRide offers flexible rental solutions to suit every journey.
          </p>
        </div>

        {/* Services Grid */}
        <div className="row text-center g-4">
          {/* Service 1 */}
          <div className="col-md-4" data-aos="zoom-in-down">
            <div className="service-box p-4 rounded shadow-sm h-100">
              <div className="icon mb-3 fs-1">🚗</div>
              <h5 className="fw-bold">Self-Drive Rentals</h5>
              <p>
                Enjoy complete freedom with our well-maintained fleet of cars
                and bikes. Rent by the hour, day, or week.
              </p>
            </div>
          </div>

          {/* Service 2 */}
          <div className="col-md-4" data-aos="zoom-in-down">
            <div className="service-box p-4 rounded shadow-sm h-100">
              <div className="icon mb-3 fs-1">🧑‍✈️</div>
              <h5 className="fw-bold">Chauffeur Service</h5>
              <p>
                Travel in comfort and style with our trained and professional
                drivers for business or leisure trips.
              </p>
            </div>
          </div>

          {/* Service 3 */}
          <div className="col-md-4" data-aos="zoom-in-down">
            <div className="service-box p-4 rounded shadow-sm h-100">
              <div className="icon mb-3 fs-1">📍</div>
              <h5 className="fw-bold">Doorstep Delivery</h5>
              <p>
                We deliver the vehicle to your preferred location, making your
                rental experience seamless and hassle-free.
              </p>
            </div>
          </div>

          {/* Service 4 */}
          <div className="col-md-4" data-aos="zoom-in-up">
            <div className="service-box p-4 rounded shadow-sm h-100">
              <div className="icon mb-3 fs-1">🛠️</div>
              <h5 className="fw-bold">24/7 Roadside Assistance</h5>
              <p>
                Drive worry-free with our around-the-clock roadside support
                across supported cities.
              </p>
            </div>
          </div>

          {/* Service 5 */}
          <div className="col-md-4" data-aos="zoom-in-up">
            <div className="service-box p-4 rounded shadow-sm h-100">
              <div className="icon mb-3 fs-1">💳</div>
              <h5 className="fw-bold">Flexible Payment Options</h5>
              <p>
                Pay online or offline with multiple secure methods including
                UPI, cards, and wallets.
              </p>
            </div>
          </div>

          {/* Service 6 */}
          <div className="col-md-4" data-aos="zoom-in-up">
            <div className="service-box p-4 rounded shadow-sm h-100">
              <div className="icon mb-3 fs-1">🧼</div>
              <h5 className="fw-bold">Sanitized Vehicles</h5>
              <p>
                Every vehicle is cleaned and sanitized after every trip to
                ensure your safety and hygiene.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
