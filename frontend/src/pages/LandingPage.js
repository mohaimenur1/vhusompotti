/** @format */

import React from 'react';
import logo from '../assests/img/logo.png';
import './LandingPage.css';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import axios from 'axios';

const landingpage = () => {
  const ldp = async () => {
    try {
      const result = await axios.get('/').data;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='container'>
      <nav>
        <img src={logo} alt='logo' />
      </nav>
      <div className='details-section row'>
        <div className='text-section col'>
          <h2>Property Handler App</h2>
          <p>
            Arranging your details with Proper data insertation with easy
            access. Best solution for the property. Make your propertey details
            gather.
          </p>
          <Link to='/login' className='btn btn-primary registerbtn'>
            Sign In / Register
          </Link>
        </div>
        <div className='img-section col'>
          <lottie-player
            src='https://assets5.lottiefiles.com/packages/lf20_svy4ivvy.json'
            background='transparent'
            speed='1'
            // style='width: 300px; height: 300px;'
            loop
            autoplay
          ></lottie-player>
        </div>
      </div>
    </div>
  );
};

export default landingpage;
