/** @format */
import React from 'react';
import { Link } from 'react-router-dom';
import './LogIn.css';

const LogIn = () => {
  return (
    <div>
      <div className='container'>
        <div className='login-page'>
          <div className='row '>
            <div className='col-lg-6'>
              <div>
                <lottie-player
                  src='https://assets10.lottiefiles.com/packages/lf20_nlkzlzd4.json'
                  background='transparent'
                  speed='.5'
                  loop
                  autoplay
                ></lottie-player>
              </div>
              <h3 className='login-text-part'>
                Better Solutions For Property Handler
              </h3>
            </div>
            <div className='col-lg-6 form-part'>
              <h2
                className='login-form-text-part'
                style={{ marginBottom: '2rem' }}
              >
                Login Form
              </h2>
              <form className='form'>
                <div className='row'>
                  <div className='col-lg-12'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Email'
                    />
                  </div>

                  <div className='col-lg-12'>
                    <div className='form-group'>
                      <input
                        type='password'
                        className='form-control'
                        placeholder='Password'
                      />
                    </div>
                  </div>
                </div>
                <div className='button-part'>
                  <button type='button' className='btn btn-primary btn-lg'>
                    <Link to='/dashboard'>LOGIN</Link>
                  </button>
                </div>
                <div className='d-flex justify-content-center mt-5'>
                  <h5>
                    Don't have an account?<Link to='/signup'>Sign Up</Link>
                  </h5>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
