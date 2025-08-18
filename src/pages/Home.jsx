import Hero from "../components/Hero";
import About from "./About";
import Services from "./Services";
import Pricing from "./Pricing";
import Vehicle from "../components/Vehicle";
import Testimonials from "./Testimonials";
import TeamSection from "./OurTeam";
import ContactSection from "./ContactUs";
function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Pricing />
      <Vehicle />
      <Testimonials />
      <TeamSection />
      <ContactSection />
    </div>
  );
}
export default Home;
