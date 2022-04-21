/** @format */

import React from "react";
import "./PostSellilng.css";
import profileImage from "../../assests/img/profileimage.png";
import propImg1 from "../../assests/img/propimg1.png";
import { AiTwotoneLike } from "react-icons/ai";
import Navbar from "../Dashboard/Navbar/Navbar";
import SideBar from "../Dashboard/SideBar/SideBar";

const PostSelling = () => {
  return (
    <div>
      <Navbar />
      <div className="side-bar">
        <SideBar />
      </div>
      <h2>Post Section</h2>
      {/* <div className='main-section'>
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
      </div> */}
      <div className="container mt-5 mb-5 post-container">
        <div className="d-flex justify-content-center row">
          <div className="d-flex flex-column col-md-8 content">
            <div className="d-flex flex-row align-items-center text-left comment-top p-2 bg-white border-bottom px-4">
              <div className="profile-image">
                <img
                  className="rounded-circle"
                  src="https://i.imgur.com/06EM6Iy.jpg"
                  width="70"
                />
              </div>
              <div className="d-flex flex-column-reverse flex-grow-0 align-items-center votings ml-1">
                <i className="fa fa-sort-up fa-2x hit-voting"></i>
                <span>127</span>
                <i className="fa fa-sort-down fa-2x hit-voting"></i>
              </div>
              <div className="d-flex flex-column ml-3">
                <div className="d-flex flex-row post-title">
                  <h5>md.shakhwat hossain</h5>
                </div>
                <div className="d-flex flex-row align-items-center align-content-center post-title">
                  {/* <span className="mr-2 comments">13 comments&nbsp;</span>
                  <span className="mr-2 dot"></span> */}
                  <span>6 hours ago</span>
                </div>
              </div>
            </div>
            <div className="coment-bottom bg-white p-2 px-4">
              <div className="d-flex flex-row add-comment-section mt-4 mb-4">
                <img
                  className="img-fluid img-responsive rounded-circle mr-2 comment-image"
                  src="https://i.imgur.com/KLeobJk.jpg"
                  width="38"
                />
                <input
                  type="text"
                  className="form-control mr-3"
                  placeholder="Add comment"
                />
                <button className="btn btn-primary" type="button">
                  Comment
                </button>
              </div>
              <div className="collapsable-comment">
                <div
                  className="d-flex flex-row justify-content-between align-items-center action-collapse p-2"
                  data-toggle="collapse"
                  aria-expanded="false"
                  aria-controls="collapse-1"
                  href="#collapse-1"
                >
                  <span>Comments</span>
                  <i className="fa fa-chevron-down servicedrop"></i>
                </div>
                <div id="collapse-1" className="collapse">
                  <div className="commented-section mt-2">
                    <div className="d-flex flex-row align-items-center commented-user">
                      <h5 className="mr-2">Corey oates</h5>
                      <span className="dot mb-1"></span>
                      <span className="mb-1 ml-2">4 hours ago</span>
                    </div>
                    <div className="comment-text-sm">
                      <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </span>
                    </div>
                    <div className="reply-section">
                      <div className="d-flex flex-row align-items-center voting-icons">
                        <i className="fa fa-sort-up fa-2x mt-3 hit-voting"></i>
                        <i className="fa fa-sort-down fa-2x mb-3 hit-voting"></i>
                        <span className="ml-2">10</span>
                        <span className="dot ml-2"></span>
                        <h6 className="ml-2 mt-1">Reply</h6>
                      </div>
                    </div>
                  </div>
                  <div className="commented-section mt-2">
                    <div className="d-flex flex-row align-items-center commented-user">
                      <h5 className="mr-2">Samoya Johns</h5>
                      <span className="dot mb-1"></span>
                      <span className="mb-1 ml-2">5 hours ago</span>
                    </div>
                    <div className="comment-text-sm">
                      <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua..
                      </span>
                    </div>
                    <div className="reply-section">
                      <div className="d-flex flex-row align-items-center voting-icons">
                        <i className="fa fa-sort-up fa-2x mt-3 hit-voting"></i>
                        <i className="fa fa-sort-down fa-2x mb-3 hit-voting"></i>
                        <span className="ml-2">15</span>
                        <span className="dot ml-2"></span>
                        <h6 className="ml-2 mt-1">Reply</h6>
                      </div>
                    </div>
                  </div>
                  <div className="commented-section mt-2">
                    <div className="d-flex flex-row align-items-center commented-user">
                      <h5 className="mr-2">Makhaya andrew</h5>
                      <span className="dot mb-1"></span>
                      <span className="mb-1 ml-2">10 hours ago</span>
                    </div>
                    <div className="comment-text-sm">
                      <span>
                        Nunc sed id semper risus in hendrerit gravida rutrum.
                        Non odio euismod lacinia at quis risus sed. Commodo
                        ullamcorper a lacus vestibulum sed arcu non odio
                        euismod. Enim facilisis gravida neque convallis a. In
                        mollis nunc sed id. Adipiscing elit pellentesque
                        habitant morbi tristique senectus et netus. Ultrices mi
                        tempus imperdiet nulla malesuada pellentesque.
                      </span>
                    </div>
                    <div className="reply-section">
                      <div className="d-flex flex-row align-items-center voting-icons">
                        <i className="fa fa-sort-up fa-2x mt-3 hit-voting"></i>
                        <i className="fa fa-sort-down fa-2x mb-3 hit-voting"></i>
                        <span className="ml-2">25</span>
                        <span className="dot ml-2"></span>
                        <h6 className="ml-2 mt-1">Reply</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostSelling;
