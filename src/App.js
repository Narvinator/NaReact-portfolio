import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./pages/Hero";
import About from './pages/About'
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <NavBar/>
    
      <NavBar />
      <div className="home">
        <Hero />
        <About />
        <Projects />
        <Footer />
        <Contact />
      </div>
    </div>
  );
}

export default App;