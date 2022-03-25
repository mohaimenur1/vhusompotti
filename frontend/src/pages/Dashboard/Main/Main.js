/** @format */

import React from 'react';
import schools from './img/schools.png';
import search from './img/search.png';
import teachers from './img/teachers.png';
import students from './img/students.png';
import user from './img/user.png';
import income from './img/income.png';
import notifications from './img/notifications.png';

import './Main.css';

const Main = () => {
  return (
    // <div className='row'>
    //   <div className='content'>
    //     <div className='col-lg-10'>
    //       <h1>main section</h1>
    //       <h1>main section</h1>
    //       <h1>main section</h1>
    //       <h1>main section</h1>
    //       <h1>main section</h1>
    //       <h1>main section</h1>
    //       <h1>main section</h1>
    //       <h1>main section</h1>
    //       <h1>main section</h1>
    //       <h1>main section</h1>
    //       <h1>main section</h1>
    //       <h1>main section</h1>
    //     </div>
    //   </div>
    // </div>
    <div className='container-main'>
      <div className='header'>
        <div className='nav'>
          <div className='search'>
            <input type='text' placeholder='Search..' />
            {/* <button type='submit'>
              <img src={search} alt='' />
            </button> */}
          </div>
          <div className='user'>
            <a href='' className='btn'>
              Add New
            </a>
            <img src={notifications} alt='' />
            <div className='img-case'>
              <img src={user} alt='' />
            </div>
          </div>
        </div>
      </div>
      <div className='content'>
        <div className='cards'>
          <div className='card'>
            <div className='box'>
              <h1>250</h1>
              <h3>Users</h3>
            </div>
            <div className='icon-case'>
              <img src={students} alt='' />
            </div>
          </div>
          <div className='card'>
            <div className='box'>
              <h1>53</h1>
              <h3>Exparts</h3>
            </div>
            <div className='icon-case'>
              <img src={teachers} alt='' />
            </div>
          </div>
          <div className='card'>
            <div className='box'>
              <h1>5</h1>
              <h3>Features</h3>
            </div>
            <div className='icon-case'>
              <img src={schools} alt='' />
            </div>
          </div>
          <div className='card'>
            <div className='box'>
              <h1>7</h1>
              <h3>Check Uploads</h3>
            </div>
            <div className='icon-case'>
              <img src={income} alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
