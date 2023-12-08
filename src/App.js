import "./App.css";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Hero from "./pages/Hero";
import About from './pages/About'
import Projects from "./pages/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <NavBar />
      <div className="home">
        <Hero />
        <About />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default App;