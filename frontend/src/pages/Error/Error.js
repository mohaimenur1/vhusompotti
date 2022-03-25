/** @format */

import React from 'react';
import ErrorImg from '../../assests/img/404.png';
import { Link } from 'react-router-dom';
import './Error.css';

const Error = () => {
  return (
    <div className='error-container'>
      <img src={ErrorImg} alt='not found' />
      <h3>Ohh! Page Not Found</h3>
      <p>We can't seem to find the page you're looking for</p>
      <Link className='btn btn-primary' to='/'>
        Back Home
      </Link>
    </div>
  );
};

export default Error;
