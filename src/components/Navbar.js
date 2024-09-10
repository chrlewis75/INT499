// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import imageCart from '../images/imageCart.png';
import imageContact from '../images/imageContact.png';
import imageLogin from '../images/imageLogin.png';
import imageHome from '../images/imageHome.png';
import imageMovie from '../images/imageMovie.png';

const Navbar = () => {
    return (
      <nav className='navbar'>
        <ul className='navbar-list'>
          <li>
            <Link to="/">
              <img src={imageHome} alt="StreamList" className='navbar-icon' /> StreamList Home
            </Link>
          </li>
          <li>
            <Link to="/login">
              <img src={imageLogin} alt="User Login" className='navbar-icon' /> User Login
            </Link>
          </li>
          <li>
            <Link to="/movies">
              <img src={imageMovie} alt="Movies" className='navbar-icon' /> Movies
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <img src={imageCart} alt="Cart" className='navbar-icon' /> Cart
            </Link>
          </li>
          <li>
            <Link to="/about">
              <img src={imageContact} alt="About" className='navbar-icon' /> About
            </Link>
          </li>
        </ul>
      </nav>
    );
  };
  
  export default Navbar;