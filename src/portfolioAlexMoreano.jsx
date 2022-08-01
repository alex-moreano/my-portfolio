import Navbar from "./components/navbar/navbar";
import Intro from "./components/intro/intro";
import Services from "./components/services/services";
import Experience from "./components/experience/experience";
import Projects from "./components/projects/projects";
import Portfolio from "./components/portfolio/portfolio";
import Testimonial from "./components/testimonials/testimonial";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import './portfolioAlexMoreano.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Projects />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
