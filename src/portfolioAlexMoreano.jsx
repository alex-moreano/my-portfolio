import Navbar from "./components/navbar/navbar";
import Intro from "./components/intro/intro";
import Services from "./components/services/services";
import Experience from "./components/experience/experience";
import Projects from "./components/projects/projects";
import './portfolio.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;
