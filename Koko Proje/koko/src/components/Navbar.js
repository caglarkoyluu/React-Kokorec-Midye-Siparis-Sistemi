import React, { useState } from 'react';
import KokoLogo from '../assets/kokologo.png';
import { Link } from 'react-router-dom';
import '../steyles/Navbar.css';
import '../steyles/Footer.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); 

  return (
    <div className='navbar'>
      <Link to="/" className="logo-link"> 
        <img src={KokoLogo} alt='Koko Logo' className="logo" />
      </Link>
      <div className='mainLink'>
        <Link to="/">Anasayfa</Link>
        <div 
          className="menu-container" 
          onMouseEnter={() => setMenuOpen(true)} 
          onMouseLeave={() => setMenuOpen(false)}
        >
          <Link to="/menu" className="menu-link">Menü</Link>
          {menuOpen && (
            <div className="dropdown-menu">
              <Link to="/menu/kokorec" className="dropdown-item">Kokoreç</Link>
              <Link to="/menu/midye" className="dropdown-item">Midye</Link>
            </div>
          )}
        </div>
        <Link to="/about">Hakkımızda</Link>
        <Link to="/contact">İletişim</Link>
      </div>
    </div>
  );
};

export default Navbar;
