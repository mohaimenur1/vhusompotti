/** @format */

import React from 'react';
import './Navbar.css';
import logo from '../../../assests/img/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar-layout'>
      <nav class='navbar-header navbar navbar-light bg-light nav-dashboard'>
        <Link to='/' class='navbar-brand' href='#'>
          <img src={logo} alt='' />
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
