import Navbar from "./components/navbar/navbar";
import Intro from "./components/intro/intro";
import Services from "./components/services/services";
import Experience from "./components/experience/experience";
import Projects from "./components/projects/projects";
import Portfolio from "./components/portfolio/portfolio";
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
    </div>
  );
}

export default App;
