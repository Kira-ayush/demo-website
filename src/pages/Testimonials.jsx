import '../css/Review.css';
function Testimonials() {
  return (
    <section
      id="review"
      className="py-5"
      style={{ backgroundColor: "#FDFAF6" }}
      data-aos="fade-left"
    >
      <div className="text-center mb-5">
        <h2 className="fw-bold">Testimonials</h2>
        <p className="lead">
          Hear from some of our satisfied clients who have shared their
          experiences. We value their feedback and strive to provide the best
          service possible every time.
        </p>
      </div>

      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        {/* Indicators */}
        <div className="carousel-indicators">
          {[...Array(7)].map((_, i) => (
            <button
              key={i}
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to={i}
              className={i === 0 ? "active" : ""}
              aria-current={i === 0 ? "true" : undefined}
              aria-label={`Slide ${i + 1}`}
            ></button>
          ))}
        </div>

        {/* Slides */}
        <div className="carousel-inner inner">
          {/* Testimonial 1 */}
          <div className="carousel-item active rev" data-bs-interval="4000">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6 text-center">
                  <img
                    src="/images/anita.jpg"
                    className="d-block w-50"
                    alt="Anita"
                  />
                </div>
                <div className="col-md-6 review-box">
                  <h4>
                    {"⭐".repeat(5)}
                    <br />
                    Anita Kumari
                  </h4>
                  <p>"Very satisfied! Would definitely use the service again."</p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="carousel-item rev" data-bs-interval="3000">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6 text-center">
                  <img
                    src="/images/anu.jpg"
                    className="d-block w-50"
                    alt="Anjali"
                  />
                </div>
                <div className="col-md-6 review-box">
                  <h4>
                    {"⭐".repeat(5)}
                    <br />
                    Anjali Khandait
                  </h4>
                  <p>
                    "Absolutely amazing experience! The service exceeded all
                    expectations."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="carousel-item rev" data-bs-interval="3000">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6 text-center">
                  <img
                    src="/images/rahul.jpg"
                    className="d-block w-50"
                    alt="Rahul"
                  />
                </div>
                <div className="col-md-6 review-box">
                  <h4>
                    {"⭐".repeat(5)}
                    <br />
                    Rahul Kumar
                  </h4>
                  <p>
                    "Professional, punctual, and friendly. Would highly
                    recommend them!"
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial 4 */}
          <div className="carousel-item rev" data-bs-interval="3000">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6 text-center">
                  <img
                    src="/images/aadi.jpg"
                    className="d-block w-50"
                    alt="Aditya"
                  />
                </div>
                <div className="col-md-6 review-box">
                  <h4>
                    {"⭐".repeat(4)}⭐½
                    <br />
                    Aditya Kumar
                  </h4>
                  <p>
                    "Flawless from start to finish. Truly impressed by the
                    team’s dedication."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial 5 */}
          <div className="carousel-item rev" data-bs-interval="3000">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6 text-center">
                  <img
                    src="/images/prerna.jpg"
                    className="d-block w-50"
                    alt="Prerna"
                  />
                </div>
                <div className="col-md-6 review-box">
                  <h4>
                    {"⭐".repeat(5)}
                    <br />
                    Prerna Singh
                  </h4>
                  <p>
                    "Couldn’t have asked for better service. Truly top-class
                    experience."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial 6 */}
          <div className="carousel-item rev" data-bs-interval="3000">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6 text-center">
                  <img
                    src="/images/bittu.jpg"
                    className="d-block w-50"
                    alt="Bittu"
                  />
                </div>
                <div className="col-md-6 review-box">
                  <h4>
                    {"⭐".repeat(5)}
                    <br />
                    Bittu Kumar Saw
                  </h4>
                  <p>
                    "Excellent quality and outstanding support. Keep up the
                    great work!"
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial 7 */}
          <div className="carousel-item rev">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6 text-center">
                  <img
                    src="/images/dhiraj.jpg"
                    className="d-block w-50"
                    alt="Dhiraj"
                  />
                </div>
                <div className="col-md-6 review-box">
                  <h4>
                    {"⭐".repeat(4)}⭐½
                    <br />
                    Dhiraj Kumar
                  </h4>
                  <p>
                    "Some representative placeholder content for the first
                    slide."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
