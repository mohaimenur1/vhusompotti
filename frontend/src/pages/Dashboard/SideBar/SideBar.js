/** @format */

import React from "react";
import { Link } from "react-router-dom";
import "./SideBar2.css";
// import './SideBar.css';
const SideBar = () => {
  return (
    <React.Fragment>
      {/* <div className='row'>
        <nav className='col-lg-2 d-none d-md-block bg-light sidebar'>
          <div className='sidebar-sticky'>
            <ul className='nav flex-column'>
              <li className='nav-item'>
                <a className='nav-link active' href='#'>
                  <span>
                    {' '}
                    <i className='fas fa-border-all'></i>
                  </span>
                  Dashboard <span className='sr-only'>(current)</span>
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  <span>
                    <i className='fas fa-user-shield'></i>
                  </span>
                  My Files
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  <span>
                    <i className='fas fa-cloud-upload-alt'></i>
                  </span>
                  File Upload
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  <span>
                    <i className='fas fa-headset'></i>
                  </span>
                  Talk With Expart
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  <span>
                    <i className='far fa-address-card'></i>
                  </span>
                  Selling Post
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div> */}
      <div class="side-menu">
        {/* <div class='brand-name'>
          <h1>Brand</h1>
        </div> */}
        <ul>
          <li className="nav-item">
            <a className="nav-link active" href="#">
              <span>
                {" "}
                <i className="fas fa-border-all"></i>
              </span>
              Dashboard <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span>
                <i className="fas fa-user-shield"></i>
              </span>
              <Link to="/myfile">My Files</Link>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span>
                <i className="fas fa-cloud-upload-alt"></i>
              </span>
              <Link to="/fileupload">File Upload</Link>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span>
                <i className="fas fa-headset"></i>
              </span>
              Talk With Expart
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span>
                <i className="far fa-address-card"></i>
              </span>
              <Link to="/post">Selling Post</Link>
            </a>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default SideBar;
