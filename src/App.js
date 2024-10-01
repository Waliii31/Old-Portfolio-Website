import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Projects from "./Components/Projects";
import Projects30 from "./Components/Projects30";
import Projects30Images from "./Components/Projects30Images";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div >
      <Header />
      <About />
      <Skills />
      <Projects />
      <Projects30 />
      <Projects30Images />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
