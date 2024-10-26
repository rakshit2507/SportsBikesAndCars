import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Gallery from './Components/Gallery';
import Services from './Components/Services';
// For Form validation
import Form from './Components/Form';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main>
          <section>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              {/* <Route path="/form" element={<Form />} /> */}
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/services" element={<Services />} />
            </Routes>
          </section>
        </main>
      </Router>
    </div>
  );
}

export default App;
