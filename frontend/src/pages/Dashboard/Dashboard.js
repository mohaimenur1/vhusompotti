/** @format */

import React from 'react';
import './Dashboard.css';
import Main from './Main/Main';
import Navbar from './Navbar/Navbar';
import SideBar from './SideBar/SideBar';

const Dashboard = () => {
  return (
    <div className='dashboard-layout'>
      <div className='dashboard-navbar bg-dark'>
        <Navbar />
      </div>
      <div className='row main-content-layout'>
        <div className='col-lg-2'>
          <SideBar />
        </div>
        <div className='col-lg-10'>
          <Main />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
