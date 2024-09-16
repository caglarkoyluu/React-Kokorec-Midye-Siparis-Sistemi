import React from 'react'
import { Link } from 'react-router-dom';
import BannerImage from '../assets/kokobaner.jpg';
import '../steyles/Home.css'

 const Home = () => {
  return (
    <div
    className='mainPage'
    style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className='order'>
        <Link to ='/menu'>
        <button>
          Sipariş Ver
        </button>
        </Link>
      </div>
    </div>
  )
}
export default Home;

