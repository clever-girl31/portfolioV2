import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio"


function App() {


  return (
    <Router>
    <div className="bg-black container-sm">
      <header className='navbar text-primary border-primary border-bottom'>
        <h1>Joanna M Seybold</h1>
        <h3><Link to='/'>About</Link></h3>
        <h3><Link to='/portfolio'>Portfolio</Link></h3>
        <h3><Link to='/contact'>Contact</Link></h3>
      </header>
      <main>
        <Routes>
          <Route 
          path="/" 
          element={<About />}
          />
          <Route 
          path="/portfolio" 
          element={<Portfolio />}
          />
          <Route 
          path="/contact" 
          element={<Contact />}
          />
        </Routes>
      </main>
    </div>
  </Router>
  );
}

export default App;
