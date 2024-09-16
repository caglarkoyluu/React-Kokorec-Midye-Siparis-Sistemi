import React from 'react';
import { Link } from 'react-router-dom';
import KokorecImage from '../assets/koko.jpg'; 
import MidyeImage from '../assets/midye.jpg'; 
import '../steyles/Menu.css'

const Menu = () => {
  return (
    <div className="menu-page">
      <h1>Menü</h1>
      <div className="menu-items">
        <Link to="/menu/kokorec" className="menu-item">
          <img src={KokorecImage} alt="Kokoreç" />
          <h2>Kokoreç</h2>
        </Link>
        <Link to="/menu/midye" className="menu-item">
          <img src={MidyeImage} alt="Midye" />
          <h2>Midye</h2>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
