import { Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import About from "./components/About";


function App() {

  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <body className="bg-black container-sm">
      <header className='navbar text-primary border-primary border-bottom'>
        <h1>Joanna M Seybold</h1>
        <h3>
          <Link to="/" onClick={() => handleNavigation("/")}>
            About
          </Link>
        </h3>
        <h3>
          <Link to="/portfolio" onClick={() => handleNavigation("/portfolio")}>
            Portfolio
          </Link>
        </h3>
        <h3>
          <Link to="/contact" onClick={() => handleNavigation("/contact")}>
            Contact
          </Link>
        </h3>
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
    </body>
  );
}

export default App;
