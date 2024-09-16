import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import Contact from './components/Contact';
import Kokorec from './components/Kokorec';
import Midye from './components/Midye';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { CSSTransition, TransitionGroup } from 'react-transition-group'; 

function App() {
  const location = useLocation(); 

  return (
    <div className="App">
      <Navbar />
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={300}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/menu/kokorec" element={<Kokorec />} />
            <Route path="/menu/midye" element={<Midye />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </div>
  );
}

export default App;
