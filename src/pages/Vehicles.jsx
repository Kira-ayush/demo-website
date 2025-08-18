import { useEffect, useState } from "react";
import "../css/ourVehicles.css"; // your CSS from our_vehiclesstyle.css
import "animate.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function OurVehicles() {
  const [vehicles, setVehicles] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sortType, setSortType] = useState("");

  // Fetch vehicles from backend (replace with your API endpoint)
  useEffect(() => {
    fetch("http://localhost/flexiride/api/vehicles.php") // 🚨 adjust API path
      .then((res) => res.json())
      .then((data) => setVehicles(data))
      .catch((err) => console.error(err));
  }, []);

  // Filtering
  const filteredVehicles = vehicles
    .filter((v) => {
      const matchesCategory =
        category === "all" || v.category.toLowerCase() === category;
      const matchesSearch =
        v.name.toLowerCase().includes(search.toLowerCase()) ||
        v.subcategory.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      const priceA = parseFloat(a.price_per_day) || 0;
      const priceB = parseFloat(b.price_per_day) || 0;
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();

      switch (sortType) {
        case "price-asc":
          return priceA - priceB;
        case "price-desc":
          return priceB - priceA;
        case "name-asc":
          return nameA.localeCompare(nameB);
        case "name-desc":
          return nameB.localeCompare(nameA);
        default:
          return 0;
      }
    });

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">Explore Our Vehicles</h2>
      <div className="container">
        <div className="row gy-4 align-items-center justify-content-between mb-4">
          {/* Search */}
          <div className="col-md-4">
            <div className="input-container">
              <input
                className="input"
                type="text"
                placeholder="Search vehicles..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="col-md-4 d-flex justify-content-center">
            <div className="radio-inputs">
              <label className="animate__animated animate__bounceIn">
                <input
                  type="radio"
                  name="categoryFilter"
                  value="all"
                  checked={category === "all"}
                  onChange={(e) => setCategory(e.target.value)}
                />
                <span className="radio-tile">
                  <i className="fas fa-list"></i>
                  <span>All</span>
                </span>
              </label>
              <label className="animate__animated animate__bounceIn animate__delay-1s">
                <input
                  type="radio"
                  name="categoryFilter"
                  value="car"
                  checked={category === "car"}
                  onChange={(e) => setCategory(e.target.value)}
                />
                <span className="radio-tile">
                  <i className="fas fa-car"></i>
                  <span>Car</span>
                </span>
              </label>
              <label className="animate__animated animate__bounceIn animate__delay-1s">
                <input
                  type="radio"
                  name="categoryFilter"
                  value="bike"
                  checked={category === "bike"}
                  onChange={(e) => setCategory(e.target.value)}
                />
                <span className="radio-tile">
                  <i className="fas fa-motorcycle"></i>
                  <span>Bike</span>
                </span>
              </label>
            </div>
          </div>

          {/* Sort Dropdown */}
          <div className="col-md-3 d-flex justify-content-md-end justify-content-center mt-3 mt-md-0">
            <div className="menu">
              <div className="item animate__animated animate__fadeInDownBig">
                <a href="#" className="link">
                  <span> Sort By </span>
                  <svg viewBox="0 0 360 360" xmlSpace="preserve">
                    <path d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z" />
                  </svg>
                </a>
                <div className="submenu">
                  <div className="submenu-item">
                    <a href="#" onClick={() => setSortType("price-asc")}>
                      Price: Low to High
                    </a>
                  </div>
                  <div className="submenu-item">
                    <a href="#" onClick={() => setSortType("price-desc")}>
                      Price: High to Low
                    </a>
                  </div>
                  <div className="submenu-item">
                    <a href="#" onClick={() => setSortType("name-asc")}>
                      Name: A-Z
                    </a>
                  </div>
                  <div className="submenu-item">
                    <a href="#" onClick={() => setSortType("name-desc")}>
                      Name: Z-A
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vehicle Grid */}
      <div className="row" id="vehicleGrid">
        {filteredVehicles.map((v) => (
          <div
            key={v.id}
            className="col-12 col-sm-6 col-md-4 mb-4 vehicle-card animate__animated animate__fadeInLeftBig animate__delay-1s"
            data-category={v.category}
          >
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    src={`http://localhost/flexiride/uploads/${v.image_path}`}
                    alt={v.name}
                    className="img-fluid"
                    style={{ height: "150px" }}
                  />
                  <h5>{v.name}</h5>
                  <p className="mt-2 text text-uppercase small">{v.subcategory}</p>
                  <p>
                    <strong>₹{v.price_per_day}/day</strong>
                  </p>
                </div>
                <div className="flip-card-back d-flex flex-column justify-content-center">
                  <h6>Features:</h6>
                  <p>{v.features}</p>
                  <a href={`/book/${v.id}`} className="btn btn-info mt-2">
                    Book Now
                  </a>
                  <a href={`/details/${v.id}`} className="btn btn-info mt-2">
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
