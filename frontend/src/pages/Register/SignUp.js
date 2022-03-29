/** @format */

import React, { useState } from "react";
import axios from "axios";
import "./SignUp.css";
import logo from "../../assests/img/logo.png";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, csetPassword] = useState("");

  const formSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, password, cpassword });
  };
  const register = async () => {
    if (password == cpassword) {
      let users = {
        name,
        email,
        password,
        cpassword,
      };
      try {
        const result = await axios.post("/api/users/signup", users).data;
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("password not matched");
    }
  };

  return (
    <div>
      <Link to="/">
        <nav className="container">
          <img src={logo} alt="logo" />
        </nav>
      </Link>
      <div className="form-class">
        <h2 className="text-center">SignUp Form</h2>
        <form className="form" onSubmit={formSubmit}>
          <div className="row">
            <div className="col-lg-12">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>

            <div className="col-lg-12">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Confirm Password"
                  value={cpassword}
                  onChange={(e) => {
                    csetPassword(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="button-part">
            <button className="btn btn-primary btn-lg" onClick={register}>
              Sign Up
            </button>
          </div>
          <div className="d-flex justify-content-end mt-5">
            <h5>
              Already have an account?<Link to="/login">Log In</Link>
            </h5>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
