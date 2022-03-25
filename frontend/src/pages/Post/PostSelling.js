/** @format */

import React from 'react';
import './PostSellilng.css';
import profileImage from '../../assests/img/profileimage.png';
import propImg1 from '../../assests/img/propimg1.png';
import { AiTwotoneLike } from 'react-icons/ai';
import Navbar from '../Dashboard/Navbar/Navbar';
import SideBar from '../Dashboard/SideBar/SideBar';

const PostSelling = () => {
  return (
    <div>
      <Navbar />
      <div className='side-bar'>
        <SideBar />
      </div>
      <div className='main-section'>
        <div className='post-heading'>
          <h1 className='text-center'>selling post</h1>
        </div>
        <div className='post-section'>
          <div className='post-contents'>
            <img src={profileImage} alt='profileimage' className='profimg' />
            <div className='post-image'>
              <img src={propImg1} alt='propertyImage1' className='propimg' />
            </div>
          </div>
          <div className='post-feedback'>
            <span className='post-feedback-comment'>comments</span>
            <span className='post-feedback-like'>
              <AiTwotoneLike style={{ heigh: '2rem' }} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostSelling;
