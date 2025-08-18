import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import BookRide from "./pages/BookRide";
import ContactUs from "./pages/ContactUs";
import OurTeam from "./pages/OurTeam";
import Pricing from "./pages/Pricing";
import Services from "./pages/Services";
import Testimonials from "./pages/Testimonials";
import Vehicles from "./pages/Vehicles";
import Footer from "./components/Footer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration (ms)
      once: true, // whether animation should happen only once
    });
  }, []);
  return (
    <>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/book" element={<BookRide />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/services" element={<Services />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/vehicles" element={<Vehicles />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
